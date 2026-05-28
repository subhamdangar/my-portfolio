# Knowledge Base

This folder contains the knowledge base for the AI portfolio chatbot.

## Current Architecture

The chatbot currently uses **static context injection**:
- `portfolio_context.ts` contains all portfolio information as structured text
- This text is injected into the AI's system prompt when answering questions
- The AI can only answer based on what's in this file

## How to Update

1. Open `portfolio_context.ts`
2. Edit the `PORTFOLIO_CONTEXT` string with your real information
3. Update sections: Personal Summary, Education, Skills, Projects, Certifications, Contact
4. Restart the dev server to see changes

## Future RAG Expansion

This architecture is designed for easy expansion to a full RAG system:

### Planned Structure
```
knowledge_base/
├── portfolio_context.ts    ← Current: static context
├── documents/              ← Future: raw documents to embed
│   ├── resume.pdf
│   ├── project_details/
│   └── blog_posts/
├── README.md               ← You are here

embeddings/                 ← Future: vector embeddings
├── .gitkeep

vector_store/              ← Future: vector database files
├── .gitkeep
```

### To Implement RAG
1. Choose an embedding model (e.g., `sentence-transformers/all-MiniLM-L6-v2`)
2. Set up a vector database (ChromaDB, Pinecone, or Weaviate)
3. Create an ingestion script to embed documents
4. Modify `app/api/chat/route.ts` to:
   - Embed the user's query
   - Search the vector store for relevant chunks
   - Inject retrieved chunks into the system prompt
   - Send to LLM for response generation

### Benefits of RAG
- Handles much larger knowledge bases
- More accurate responses from specific document retrieval
- Easy to add new information (just embed new documents)
- Reduces hallucination by grounding responses in real data
