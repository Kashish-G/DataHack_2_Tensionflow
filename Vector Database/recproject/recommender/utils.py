import pandas as pd
import pickle

# Load Data & Prepare data
def load_data(data):
    return pd.read_csv(data)

def prepare_data(df):
    docx = df["Lawyer Names"].tolist()
    payload = df[["Rating","Jurisdiction","Charges","Days_of_disposal","City","Years_of_Experience","Type_of_Lawyer","Languages","Pro_bono","Lawyer Names","Lawfirms","Demography","Gender"]].to_dict("records")
    return docx, payload

def save_vectors(vectors):
    with open("vectorized_lawyers.pickle", "wb") as f:
        pickle.dump(vectors, f)
        
def load_vectors(vector_file):
    with open(vector_file, "rb") as f:
        my_object = pickle.load(f)
    return my_object