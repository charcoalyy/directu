import cohere
from dotenv import load_dotenv
load_dotenv()

import os
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)

def cosine_similarity(a, b):
    return np.dot(a, b)/(np.linalg.norm(a) * np.linalg.norm(b))

def get_similarity_score():
    with open("cs_136_info.json", "r") as f:
    cs_136_info = json.load(f)

    cs_136_embeddings = co.embed(texts=cs_136_info["reviews"])
    cs_136_embeddings_vector = cs_136_embeddings.embeddings

    with open("cs_246_info.json", "r") as f:
    cs_246_info = json.load(f)


    cs_246_embeddings = co.embed(texts=cs_246_info["reviews"])
    cs_246_embeddings_vector = cs_246_embeddings.embeddings

    embedding_vector_1 = cs_136_embeddings_vector
    embedding_vector_2 = cs_246_embeddings_vector

    sum = 0

    for i in range(len(embedding_vector_1)):
        for j in range(len(embedding_vector_2)):
            sum += cosine_similarity(embedding_vector_1[i], embedding_vector_2[j])

    similarity_score = sum / (len(embedding_vector_1) * len(embedding_vector_2))

    return similarity_score

def get_course_summary(course_code, course_num):
    