from flask import Flask,render_template,request,jsonify
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from datetime import datetime

# popular_df = pickle.load(open('popular.pkl','rb'))
# pt = pickle.load(open('pt.pkl','rb'))
# books = pickle.load(open('books.pkl','rb'))
model = pickle.load(open('model.pkl','rb'))
# similarity_scores = pickle.load(open('similarity_scores.pkl','rb'))
embeddings = pickle.load(open('embeddings.pkl','rb'))

books_latest = pd.read_csv('books_latest.csv')
books_latest['Year-Of-Publication'] = books_latest['Year-Of-Publication'].astype(str)
for col in ['Book-Title','Book-Author','ISBN','Publisher']:
    books_latest[col] = books_latest[col].str.strip()

top_books = pd.read_csv('df_titles_top.csv')
lst_titles = books_latest['Book-Title']

def similar_embeddings(input, k, model, embeddings, titles):
    '''
        input: string
        k: number (top K)
        model
        embeddings
        return: list of similar embeddings
    '''
    print('[+] Retrieving similar embeddings...')
    input_embedding = model.encode(input)
    # use cosine similarity to find similar embedding
    similarity_list = []
    print(len(embeddings))
    print(len(titles))
    # calculate similarity score for each pair of <input, embedding, index>
    for i, embedding in enumerate(embeddings):
        similarity = cosine_similarity([input_embedding], [embedding])[0][0]
        similarity_list.append((similarity, titles.values[i]))
        # print(f'Title {i}',titles.values[i])
    # get top 10
    similarity_list = sorted(similarity_list, reverse=True)[:k]
    # return embeddings with highest similarity score
    return similarity_list

def get_top_k_rcmd(title, k, model, embeddings, lst_titles):
    # Get top 5 recommendations for each book title in lst_titles
    start_time = datetime.now()
    print('title:', title, start_time)
    dct_rcmd = {'title': title}
    lst_rcmd = similar_embeddings(title, k, model, embeddings, lst_titles)
    print('DONE AFTER', datetime.now() - start_time)

    # Get other information of the main book
    main_book = books_latest[books_latest['Book-Title'] == title].iloc[0]
    dct_rcmd['title_author'] = main_book['Book-Author']
    dct_rcmd['title_year'] = main_book['Year-Of-Publication']
    dct_rcmd['title_isbn'] = main_book['ISBN']
    dct_rcmd['title_publisher'] = main_book['Publisher']
    dct_rcmd['title_url_s'] = main_book['Image-URL-S']
    dct_rcmd['title_url_m'] = main_book['Image-URL-M']
    dct_rcmd['title_url_l'] = main_book['Image-URL-L']
    
    # Get other information of the recommendation books
    for i, rcmd in enumerate(lst_rcmd):
        rcmd_score = rcmd[0]
        rcmd_title = rcmd[1]
        dct_rcmd['rcmd_' + str(i + 1)] = rcmd_title
        dct_rcmd['rcmd_' + str(i + 1) + '_score'] = str(rcmd_score)

        rcmd_book = books_latest[books_latest['Book-Title'] == rcmd_title].iloc[0]

        dct_rcmd['rcmd_' + str(i + 1) + '_author'] = rcmd_book['Book-Author']
        dct_rcmd['rcmd_' + str(i + 1) + '_year'] = rcmd_book['Year-Of-Publication']
        dct_rcmd['rcmd_' + str(i + 1) + '_isbn'] = rcmd_book['ISBN']
        dct_rcmd['rcmd_' + str(i + 1) + '_publisher'] = rcmd_book['Publisher']
        dct_rcmd['rcmd_' + str(i + 1) + '_url_s'] = rcmd_book['Image-URL-S']
        dct_rcmd['rcmd_' + str(i + 1) + '_url_m'] = rcmd_book['Image-URL-M']
        dct_rcmd['rcmd_' + str(i + 1) + '_url_l'] = rcmd_book['Image-URL-L']
        
    # df_merge_i.to_excel('df_merge_300.xlsx', index=False)
    
    return dct_rcmd



app = Flask(__name__)
CORS(app)


@app.route('/api/recommend_books/<input_title>')
def recommend(input_title):
    # input_title = request.form.get('input_title')
    # input_title = "Bedtime"
    dct_rcmd = get_top_k_rcmd(input_title, 5, model, embeddings, lst_titles)
    print('dct_rcmd:', dct_rcmd)
    return jsonify(dct_rcmd)

if __name__ == '__main__':
    app.run(debug=True)