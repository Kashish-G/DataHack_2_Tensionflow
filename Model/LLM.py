import streamlit as st
from langchain.llms import OpenAI
from langchain.prompts.chat import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
import pandas as pd

st.title("Legal Chatbot and Lawyer Recommender")

# Input text box for user query
user_query = st.text_area("Enter your legal query:")

if st.button("Get Recommendations"):
    # Your original code for generating categories and filtering lawyers
    prompt = ChatPromptTemplate.from_template(
        "What could be the category for the query {input}, The Categories are [Banking and Finance, Civil, Constitutional, Consumer Protection, Corporate, Criminal, Environmental, Family, Human Rights, Immigration, Intellectual Property, Labor, Media and Entertainment, Medical, Real Estate, Tax] return 3 categories in an array"
    )
    llm = OpenAI(openai_api_key="")
    model = llm
    
    str_chain = prompt | model | StrOutputParser()
    
    categories = [i.replace("and ", "") for i in str_chain.invoke({"input": user_query}).strip().replace("[",'').split(', ')]

    df_new = pd.read_csv(r"C:\Users\a21ma\OneDrive\Desktop\Datahack\DataHack_2_Tensionflow\Vector Database\recproject\FINALFINALFINALdataset.csv")  # Replace with your actual file path
    df_new = df_new.loc[:, ~df_new.columns.str.contains('^Unnamed')]
    
    # Filter lawyers based on categories
    filtered_df = df_new[df_new['Type_of_Lawyer'].str.contains(f'{categories[0]}|{categories[1]}|{categories[2]}')]
    
    def matching_algorithm(lawyer):
        score = 0
        ty = [i for i in lawyer['Type_of_Lawyer'].replace("[", "").replace("]",'').replace("'",'').split(", ")]
        for x in categories:
            if x in ty:
                score += 1
        return score
    
    filtered_df['Match_Score'] = filtered_df.apply(matching_algorithm, axis=1)
    
    # Sort lawyers based on match score, rating, years of experience, and charges
    top_lawyers = filtered_df.sort_values(by=['Match_Score','Rating','Years_of_Experience','Charges'], ascending=[False,False,False,True])
    
    # Display the top 10 recommended lawyers
    st.write("Top 10 Recommended Lawyers:")
    st.dataframe(top_lawyers.head(10))

# Note: You should replace "path_to_your_csv_file.csv" with the actual path to your CSV file.
