/* ===================================================================
   PROJECT DATA — data/projects.ts
   =====================================================================
   This file stores ALL your portfolio projects.
   Every project card on the website reads from this file.

   WHAT EACH FIELD DOES:
   → id:              Unique identifier (lowercase-with-hyphens)
   → title:           Project name shown on the card
   → description:     Short description (shown on card, ~2 lines)
   → longDescription: Detailed description (used by chatbot for answers)
   → techStack:       Array of technologies (shown as tags on card)
   → imageUrl:        Path to project image in public/images/projects/
   → githubUrl:       Link to GitHub repo
   → demoUrl:         Link to live demo, or null (button shows as disabled)
   → category:        Category label (shown as badge on card)
   → aiContext:       Detailed text the AI chatbot uses to answer questions
                      about this project. Include architecture, key concepts,
                      and technical details here.

   HOW TO ADD A NEW PROJECT:
   1. Copy one of the project objects below
   2. Paste it before the closing bracket ]
   3. Change all the fields to match your new project
   4. Add a project image to public/images/projects/
   5. The "Ask AI" button will automatically work using aiContext

   ===== REPLACE DEMO PROJECTS WITH YOUR REAL PROJECTS =====
   ===================================================================== */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string | null; // null = demo button rendered but disabled
  category: string;

  // ===== AI CHATBOT CONTEXT =====
  // This text is sent to the chatbot when someone clicks "Ask AI" on a project card.
  // Write a detailed explanation including:
  //   - What the project does
  //   - Architecture overview
  //   - Key technologies and why they were chosen
  //   - Notable features or challenges
  // The more detail you add here, the better the chatbot answers will be.
  aiContext: string;
}

export const projects: Project[] = [
  // ===== PROJECT 1 =====
  {
id: "spam-email-detection",
title: "Spam Email Detection using Machine Learning",

description:
"A machine learning-based spam detection system that classifies SMS and email messages as spam or ham using NLP preprocessing and TF-IDF feature extraction.",

longDescription:
"Built a complete end-to-end spam detection system using Natural Language Processing and Machine Learning techniques. The project preprocesses SMS/email text, extracts TF-IDF features, compares multiple ML classifiers, and deploys the best-performing model through a Flask web application with real-time prediction and confidence scoring.",

techStack: ["Python", "Flask", "scikit-learn", "NLTK", "TF-IDF", "Render"],

imageUrl: "/images/projects/ML_Project.webp",

githubUrl: "https://github.com/subhamdangar/spam-detector-flask.git", // ===== REPLACE LATER =====

demoUrl: "https://spam-detector-flask.onrender.com/", // ===== REPLACE LATER =====

category: "Machine Learning",

// ===== AI CONTEXT — Edit this to improve chatbot answers =====
aiContext: `**Spam Email Detection using Machine Learning** is a production-ready spam classification system built using Natural Language Processing and classical Machine Learning techniques.

**Architecture:**

* Data Cleaning Layer:

  * Removes duplicate messages and unnecessary dataset columns
  * Cleans and prepares the SMS Spam Collection dataset

* NLP Preprocessing Pipeline:

  * Convert text to lowercase
  * Tokenization using NLTK
  * Remove punctuation and stopwords
  * Apply Porter stemming for word normalization

* Feature Extraction:

  * TF-IDF Vectorizer converts text into sparse numerical vectors
  * max_features = 4000 for balanced performance and efficiency

* Model Training Pipeline:

  * Multiple supervised ML models were trained and compared:

    * Bernoulli Naive Bayes (BNB)
    * Multinomial Naive Bayes (MNB)
    * Support Vector Classifier (SVC)
    * Logistic Regression (LR)
    * Decision Tree (DT)
    * Random Forest (RF)
    * Gaussian Naive Bayes (GNB)
    * K-Nearest Neighbors (KNN)

* Best Performing Model:

  * Bernoulli Naive Bayes achieved the best overall performance
  * Test Accuracy: 98.65%
  * F1-Score: 0.9474

* Backend Deployment Layer:

  * Flask handles routing, prediction requests, and result rendering
  * Trained model and TF-IDF vectorizer are serialized using pickle
  * Predicts spam/ham in real time with confidence probability scores

* Frontend UI:

  * Responsive dark-themed interface
  * Real-time prediction output
  * Confidence visualization with animated progress indicators

**Key Technologies:**

* Python for backend and ML pipeline
* Flask for the web application
* scikit-learn for ML models and TF-IDF vectorization
* NLTK for NLP preprocessing and stemming
* NumPy and SciPy for numerical computation
* Render for deployment

**Notable Features:**

* Real-time spam message prediction
* Confidence score using predict_proba()
* End-to-end NLP preprocessing pipeline
* Multi-model comparative analysis
* High accuracy on imbalanced datasets
* Responsive deployed web application

**Project Insights:**

* Bernoulli Naive Bayes performed best because sparse TF-IDF vectors align well with binary word-presence modeling
* Accuracy alone was not used due to dataset imbalance
* Evaluation focused on Precision, Recall, and F1-score for fair spam detection analysis`,
  },


  // ================================ PROJECT 2 ========================================
{
  id: "distributed-educational-video-search",

  title: "Distributed Educational Video Search System",

  description:
    "A distributed multilingual semantic search engine that retrieves the most relevant YouTube educational video timestamps using embeddings, hybrid ranking, and Dask-based parallel execution across multiple worker machines.",

  longDescription:
    "Designed and implemented a distributed educational video retrieval system capable of understanding natural-language queries in English, Hindi, and Hinglish. The system uses multilingual sentence embeddings for semantic search, Dask Distributed for multi-machine parallel execution, and a multi-agent pipeline for query understanding, routing, retrieval, ranking, caching, and web fallback handling.",

  techStack: [
    "Python",
    "Dask Distributed",
    "Sentence Transformers",
    "yt-dlp",
    "SQLite",
    "LangChain",
    "YouTube Transcript API"
  ],

  imageUrl: "/images/projects/GDDC_Project.webp",

  githubUrl:
    "https://github.com/subhamdangar/distributed_video_search.git",

  demoUrl:
    null,

  category: "Distributed Systems",

  aiContext: JSON.stringify({
    overview: [
      "Distributed Educational Video Search System is a distributed multilingual semantic retrieval engine designed for educational YouTube content discovery using natural-language queries.",
      
      "The project combines distributed computing, semantic search, multilingual NLP, transcript-level retrieval, hybrid ranking, semantic caching, and fault-tolerant fallback orchestration into a scalable multi-agent architecture.",
      
      "Unlike traditional YouTube search systems that primarily rely on keyword matching and popularity metrics, this system performs semantic retrieval directly over educational content using transcript chunks, chapter metadata, and multilingual embeddings.",
      
      "The system supports English, Hindi, and Hinglish/code-mixed educational queries using multilingual sentence-transformer embeddings."
    ],

    architecture: [
      "Designed a distributed multi-agent architecture consisting of QueryAgent, CacheAgent, RouterAgent, YouTube Retrieval Agent, RankingAgent, WebAgent, and a centralized Orchestrator.",
      
      "The Orchestrator manages the complete retrieval workflow including query understanding, semantic cache lookup, distributed task scheduling, result aggregation, ranking, fallback handling, and response formatting.",
      
      "Built the distributed execution layer using Dask Distributed where educational YouTube channels are processed independently across multiple worker machines.",
      
      "Implemented modular agent-based architecture instead of a monolithic retrieval pipeline to improve maintainability, scalability, extensibility, and fault isolation.",
      
      "Designed the architecture with graceful degradation strategies where the system automatically falls back to local threaded execution if distributed execution becomes unavailable."
    ],

    query_understanding: [
      "Implemented multilingual query preprocessing capable of preserving Hindi Unicode text, transliterated Hindi, and Hinglish educational queries.",
      
      "Used paraphrase-multilingual-MiniLM-L12-v2 embeddings for multilingual semantic understanding across English, Hindi, and mixed-language educational queries.",
      
      "Generated dense 384-dimensional semantic embeddings for all queries and retrieval candidates.",
      
      "Avoided aggressive text normalization techniques to preserve multilingual educational semantics and mixed-script query structures."
    ],

    semantic_cache: [
      "Implemented a semantic cache using SQLite where previous query embeddings and retrieval results are stored persistently.",
      
      "Instead of exact string matching, the cache performs cosine similarity search between the incoming query embedding and previously stored query embeddings.",
      
      "Queries with similarity scores above the configured threshold are treated as semantic cache hits, significantly reducing repeated transcript processing and distributed computation.",
      
      "Stored query embeddings as serialized binary vectors inside SQLite for efficient retrieval and storage."
    ],

    routing_system: [
      "Implemented a hybrid subject-routing system that classifies educational queries into domains such as mathematics, computer science, physics, and chemistry.",
      
      "Combined multilingual keyword matching with embedding-based semantic similarity for robust subject classification.",
      
      "If routing confidence is low, the system intentionally routes queries to all subjects to avoid false-negative retrieval failures.",
      
      "The routing layer was designed with retrieval recall prioritization where broader distributed search is preferred over missing potentially relevant educational content."
    ],

    retrieval_pipeline: [
      "Implemented a two-stage hierarchical retrieval pipeline to balance scalability and retrieval quality.",
      
      "Stage 1 performs metadata-level retrieval by embedding video titles and descriptions from the complete channel catalog and computing semantic similarity against the query embedding.",
      
      "The system intentionally processes complete educational channel catalogs instead of only recent uploads to avoid missing older but highly relevant educational videos.",
      
      "Metadata filtering removes low-relevance candidates before expensive transcript-level semantic processing.",
      
      "Only the top candidate videos are passed into deep semantic retrieval, significantly reducing embedding and transcript-processing overhead."
    ],

    deep_retrieval: [
      "Implemented a three-tier fallback retrieval architecture consisting of transcript matching, chapter matching, and title-based fallback retrieval.",
      
      "Tier 1 performs transcript-level semantic retrieval by chunking transcripts, generating embeddings for chunks, computing cosine similarity, and extracting the most semantically relevant educational segment.",
      
      "Transcript chunking uses overlap-aware segmentation and sentence-boundary preservation to improve semantic continuity and timestamp accuracy.",
      
      "Tier 2 performs chapter-based semantic retrieval using YouTube chapter metadata and timestamp extraction from descriptions.",
      
      "Tier 3 performs title and description matching as the final fallback retrieval layer when transcripts and chapters are unavailable.",
      
      "The retrieval architecture was intentionally designed to continue functioning even under transcript failures, IP blocking, and missing metadata scenarios."
    ],

    timestamp_extraction: [
      "Implemented transcript-based timestamp estimation using transcript character offsets and proportional video-duration mapping.",
      
      "Chapter-based retrieval returns exact educational chapter timestamps directly from YouTube metadata.",
      
      "Title-only fallback retrieval defaults to timestamp 00:00:00 when deeper retrieval stages are unavailable."
    ],

    distributed_execution: [
      "Implemented distributed execution using Dask Scheduler and distributed worker nodes.",
      
      "Each worker independently processes assigned educational channels including metadata extraction, transcript retrieval, embedding generation, similarity computation, and timestamp extraction.",
      
      "Distributed channel-level parallelism significantly reduces retrieval latency during transcript-intensive workloads.",
      
      "The execution model supports both distributed multi-machine deployment and local threaded execution depending on deployment availability.",
      
      "The system architecture enables horizontal scalability by adding additional Dask workers for increased retrieval throughput."
    ],

    ranking_system: [
      "Implemented a hybrid multi-signal ranking architecture instead of relying solely on cosine similarity or popularity metrics.",
      
      "Final ranking score is computed using weighted hybrid scoring: 0.50 × chunk_similarity + 0.30 × title_similarity + 0.20 × keyword_score.",
      
      "chunk_similarity measures deep semantic relevance from transcript or chapter content.",
      
      "title_similarity measures metadata-level intent alignment between the query and educational video metadata.",
      
      "keyword_score measures literal keyword overlap for exact-term verification.",
      
      "View count is intentionally used only as a ranking tiebreaker to avoid popularity bias overriding semantic relevance.",
      
      "Implemented result deduplication where only the best semantic chunk per educational video is retained during ranking."
    ],

    fallback_and_web_search: [
      "Implemented a DuckDuckGo-based semantic web-search fallback pipeline when YouTube retrieval quality falls below the configured relevance threshold.",
      
      "The WebAgent loads educational pages, chunks page content, generates embeddings, and performs semantic ranking over external educational resources.",
      
      "Implemented trusted-domain boosting where educational websites such as Wikipedia, Khan Academy, GeeksForGeeks, StackOverflow, NCERT, and Wolfram MathWorld receive ranking boosts.",
      
      "Added Hinglish retry strategies and educational keyword expansion for ambiguous multilingual web queries."
    ],

    fault_tolerance: [
      "Implemented multiple fault-tolerance mechanisms across the retrieval pipeline.",
      
      "The system automatically falls back from transcript retrieval to chapter retrieval and finally to title-based retrieval when transcript loading fails.",
      
      "Added distributed execution fallback where local execution is automatically used if Dask worker communication fails.",
      
      "Implemented semantic caching to reduce repeated expensive transcript-processing workloads.",
      
      "Added robust handling for YouTube IP blocking, transcript failures, invalid URLs, duplicate retrieval results, and weak semantic matches."
    ],

    scalability: [
      "Designed the architecture for horizontal scalability using distributed Dask worker execution.",
      
      "Educational channels are processed independently, enabling efficient distributed task scheduling across worker nodes.",
      
      "Metadata filtering significantly reduces transcript-processing costs, improving scalability for large educational channel catalogs.",
      
      "The retrieval architecture is suitable for scalable semantic media retrieval, transcript-level search systems, and distributed educational content indexing."
    ],

    key_observations: [
      "Observed that transcript-level semantic retrieval substantially improves educational search quality compared to metadata-only search systems.",
      
      "Found that multilingual embeddings significantly improve retrieval quality for Hinglish educational queries where traditional keyword-based retrieval performs poorly.",
      
      "Observed that popularity-based ranking alone frequently surfaces semantically weak educational content, motivating the need for hybrid ranking architectures.",
      
      "Identified metadata filtering as a critical optimization for reducing transcript-processing overhead while preserving retrieval relevance.",
      
      "Observed that transcript availability is highly inconsistent across educational YouTube videos, making fallback retrieval strategies essential for robust retrieval behavior.",
      
      "Found that distributed channel-level execution substantially improves scalability during transcript-intensive semantic retrieval workloads."
    ],

    technologies: [
      "Python",
      "Dask Distributed",
      "Sentence Transformers",
      "PyTorch",
      "yt-dlp",
      "YouTube Transcript API",
      "DuckDuckGo Search",
      "LangChain",
      "SQLite",
      "NumPy",
      "Scikit-learn",
      "BeautifulSoup",
      "Requests"
    ]
  })
},

  
// ===== PROJECT 3 =====
{
  id: "multimodal-crop-disease-classification",

  title: "Multi-Modal Crop Disease Classification",

  description:
    "A deep learning-based agricultural remote sensing system for crop disease classification using RGB, multispectral, and hyperspectral imagery with attention-driven feature learning and multi-modal fusion.",

  longDescription:
    "Developed an advanced deep learning pipeline for crop disease classification using heterogeneous remote sensing modalities including RGB, multispectral, and hyperspectral imagery. The project investigates how different imaging modalities capture complementary crop-health information and how these heterogeneous feature representations can be effectively fused for robust agricultural disease classification. Implemented transfer learning with ResNet18 for RGB modeling, custom spectral encoders with attention mechanisms for multispectral analysis, and experimental feature-level fusion architectures for cross-modal representation learning. The system focuses not only on classification accuracy, but also on understanding modality behavior, spectral feature importance, representation alignment, and fusion stability across different sensor domains. The project is inspired by real-world precision agriculture challenges where spectral sensing enables earlier and more reliable disease detection than traditional visual inspection.",

  techStack: [
    "Python",
    "PyTorch",
    "Torchvision",
    "NumPy",
    "Rasterio",
    "OpenCV",
    "Scikit-learn",
    "Matplotlib",
    "Pandas"
  ],

  imageUrl: "/images/projects/DL_Project.webp",

  githubUrl:
    "https://github.com/subhamdangar/multimodal-crop-disease-classification.git", // ===== REPLACE =====

  demoUrl:
   null, // ===== REPLACE =====

  category: "Deep Learning",

  aiContext: `# Multi-Modal Crop Disease Classification

## Project Overview

Multi-Modal Crop Disease Classification is a deep learning and agricultural remote sensing project focused on detecting wheat crop diseases using heterogeneous imaging modalities. The project investigates how visible-spectrum imagery and spectral sensing technologies can be combined to improve disease classification performance in precision agriculture.

Unlike traditional computer vision systems that rely only on RGB images, this system integrates information from multiple sensing domains:
- RGB imagery
- Multispectral imagery
- Hyperspectral imagery

The objective is to classify wheat crop patches into three disease categories:
- Healthy
- Rust
- Other

The project emphasizes:
- multi-modal representation learning
- spectral feature extraction
- modality-aware deep learning
- feature-level fusion
- spectral attention mechanisms
- agricultural remote sensing analysis

The long-term goal is to build a robust AI system capable of leveraging complementary information from different sensing technologies for accurate crop health monitoring.

---

# Dataset Information

Dataset Source:
https://www.kaggle.com/competitions/beyond-visible-spectrum-ai-for-agriculture-2026/data

The dataset is based on agricultural remote sensing imagery collected from wheat crops under different disease conditions.

## Dataset Structure

Total Samples:
- 600 crop samples

Classes:
- Healthy
- Rust
- Other

Class Distribution:
- 200 samples per class

Train/Validation Split:
- Training Samples: 480
- Validation Samples: 120

The dataset contains three different sensing modalities:

### 1. RGB Images
Standard visible-spectrum images containing:
- texture information
- disease color patterns
- crop morphology
- spatial visual structures

RGB data primarily captures human-visible disease symptoms such as:
- discoloration
- texture changes
- lesion patterns
- rust spots

---

### 2. Multispectral Images
Multispectral imagery contains multiple spectral bands beyond standard RGB channels.

These spectral bands capture:
- vegetation reflectance
- chlorophyll response
- water stress patterns
- crop physiological variations

The multispectral modality provides information that may not be directly visible in RGB imagery.

---

### 3. Hyperspectral Images
Hyperspectral imagery contains approximately 125 spectral channels.

Unlike RGB images, hyperspectral sensors measure fine-grained spectral signatures across a continuous wavelength range.

This modality can potentially capture:
- biochemical crop changes
- early disease stress
- spectral anomalies
- subtle physiological variations before visible symptoms appear

Hyperspectral imaging introduces significantly higher feature dimensionality and greater representation complexity compared to RGB and multispectral modalities.

---

# Core Research Motivation

The central research hypothesis of the project is:

Different sensing modalities capture complementary information about crop health, and effective fusion of these heterogeneous representations can improve disease classification performance.

The project explores how:
- RGB imagery captures spatial and visual structure
- Spectral imagery captures physiological and biochemical information
- Multi-modal fusion can combine both sources effectively

This transforms the problem from a standard image classification task into a:
- multi-modal representation learning problem
- cross-modal feature alignment problem
- remote sensing fusion problem

---

# System Architecture

The system follows a modular multi-branch deep learning architecture where each sensing modality has a dedicated feature extraction pipeline.

The architecture is intentionally modular so that:
- individual modality branches can be improved independently
- fusion strategies can be swapped experimentally
- new sensing modalities can be integrated later

---

# RGB Modeling Pipeline

## RGB Backbone

The RGB branch uses:
- ResNet18 pretrained on ImageNet

The model is fully fine-tuned rather than using frozen features.

This allows the network to adapt pretrained visual features toward agricultural imagery and disease-specific texture patterns.

---

## Transfer Learning Strategy

The project uses transfer learning because:
- agricultural datasets are relatively small
- pretrained CNN features improve convergence
- pretrained visual representations generalize better

The training pipeline uses:
- differential learning rates
- lower learning rate for pretrained backbone
- higher learning rate for classification head

This strategy stabilizes optimization while allowing domain adaptation.

---

## RGB Data Augmentation

Advanced augmentation techniques are used to reduce overfitting and improve robustness:

- random cropping
- horizontal flipping
- vertical flipping
- image rotation
- color jitter
- random erasing

These augmentations improve:
- viewpoint invariance
- illumination robustness
- generalization capability

The augmentation pipeline is especially important because the dataset size is limited.

---

# Multispectral Modeling Pipeline

Unlike RGB images, multispectral data contains non-standard spectral channels that cannot be directly processed using conventional pretrained CNN architectures.

To address this, a custom spectral learning pipeline was designed.

---

## Spectral Attention Module

A Spectral Attention Module is implemented to learn the relative importance of different spectral bands.

The purpose of this module is to:
- dynamically weight spectral channels
- suppress noisy bands
- emphasize disease-sensitive wavelengths
- improve spectral feature discrimination

This mechanism is conceptually similar to channel attention networks but specifically adapted for spectral data.

The attention mechanism helps the network learn:
- which wavelengths contribute most strongly to disease recognition
- which spectral regions are less informative

---

## Spectral Encoder

A custom spectral encoder is used before the CNN backbone.

The encoder acts as:
- a modality adaptation layer
- a spectral feature extractor
- a latent representation generator

Its role is to transform raw spectral bands into compact and discriminative embeddings suitable for downstream classification.

This step is necessary because:
- spectral channels differ significantly from RGB channels
- pretrained ImageNet filters are not naturally aligned with spectral reflectance data

---

## Spectral Data Processing

Multispectral preprocessing includes:
- band-wise normalization
- spectral scaling
- spectral tensor conversion

The project also implements spectral augmentations:
- random band dropout
- band intensity scaling

These augmentations improve robustness against:
- sensor noise
- missing spectral information
- environmental variability

Band dropout additionally encourages the network to avoid over-dependence on a small subset of channels.

---

# Hyperspectral Modeling Pipeline (Planned)

The hyperspectral branch is currently under development.

This modality introduces new research challenges because:
- feature dimensionality becomes extremely high
- spectral redundancy increases significantly
- overfitting risk becomes severe

The planned pipeline includes:
- lightweight spectral encoders
- attention-based spectral learning
- dimensionality reduction strategies
- efficient hyperspectral feature extraction

Potential future approaches include:
- 1D spectral convolutions
- PCA-based preprocessing
- transformer-based spectral modeling
- spectral tokenization

---

# Multi-Modal Fusion Research

The most important and challenging component of the project is multi-modal fusion.

The project investigates how to combine:
- RGB feature embeddings
- multispectral embeddings
- hyperspectral embeddings

into a unified representation.

---

# Why Fusion Is Difficult

Different modalities produce fundamentally different feature distributions.

Examples:
- RGB features encode texture and morphology
- spectral features encode reflectance behavior
- hyperspectral features encode dense wavelength information

These latent spaces are not naturally aligned.

As a result:
- naive concatenation may degrade performance
- one modality may dominate optimization
- feature distributions may become incompatible

This makes multi-modal learning significantly more complex than standard classification.

---

# Planned Fusion Strategies

The project explores several advanced fusion directions.

## Feature-Level Fusion

Instead of fusing raw images, the system extracts embeddings from each modality and performs fusion in latent feature space.

Advantages:
- more compact representations
- modality-specific learning
- better scalability

---

## Attention-Based Fusion

Attention mechanisms are being explored to allow the network to:
- selectively emphasize useful modality information
- suppress noisy or conflicting representations
- dynamically adapt fusion weights

---

## Gated Fusion

Gated fusion mechanisms are planned to enable adaptive modality weighting.

This allows the network to decide:
- when RGB is more reliable
- when spectral information is more important
- how much each modality should contribute

---

## Cross-Modal Representation Alignment

A major research objective is aligning heterogeneous feature spaces.

Potential approaches include:
- projection heads
- embedding normalization
- shared latent spaces
- contrastive alignment objectives

This is critical for stable and effective multi-modal learning.

---

# Modeling Strategies

The project incorporates several advanced deep learning strategies.

## Transfer Learning
Pretrained CNN backbones are adapted to agricultural imagery.

---

## Representation Learning
The system focuses on learning discriminative latent embeddings rather than relying only on shallow classification features.

---

## Attention Mechanisms
Spectral attention improves channel-wise feature selection and adaptive wavelength importance learning.

---

## Differential Optimization
Different learning rates are used for pretrained and newly initialized layers to stabilize fine-tuning.

---

## Spectral Augmentation
Custom augmentations improve robustness to spectral variability and sensor noise.

---

## Modular Design
The architecture is intentionally modular to support:
- experimental fusion research
- modality expansion
- encoder replacement
- hyperspectral integration

---

# Current Experimental Results

## RGB Model
Architecture:
- ResNet18

Validation Accuracy:
- approximately 62%

Observations:
- strong texture learning
- effective transfer learning
- relatively stable optimization

---

## Multispectral Model

Architecture:
- Spectral Encoder + Attention + ResNet18

Validation Accuracy:
- approximately 58-60%

Observations:
- spectral learning is effective but more difficult to optimize
- some spectral bands contribute more strongly than others
- spectral attention improves representation quality

---

# Key Research Observations

Several important observations emerged during experimentation.

---

## Healthy Class Is Harder To Classify

The Healthy class exhibits larger intra-class variation.

Possible reasons:
- healthy crops appear under varying environmental conditions
- visual texture differences are subtle
- disease symptoms are often more consistent than healthy appearance

---

## Spectral Features Differ Strongly From RGB Features

Feature embeddings learned from spectral modalities behave differently from RGB embeddings.

This validates the need for:
- modality-specific encoders
- feature alignment techniques
- advanced fusion mechanisms

---

## Small Dataset Creates Optimization Challenges

Because the dataset is relatively small:
- overfitting becomes a major challenge
- augmentation becomes critical
- large fusion models become unstable

This strongly influences architecture design decisions.

---

## Multi-Modal Fusion Is Non-Trivial

Experiments suggest that simple feature concatenation may not be sufficient for effective fusion.

This motivates exploration of:
- attention-based fusion
- gated fusion
- adaptive weighting mechanisms
- cross-modal representation learning

---

# Technical Challenges

The project currently faces several major technical challenges.

## Feature Distribution Mismatch
Different modalities produce incompatible latent representations.

---

## Modality Dominance
One modality may overpower another during fusion training.

---

## High-Dimensional Spectral Data
Hyperspectral imagery introduces extremely large feature spaces.

---

## Overfitting
Limited agricultural datasets increase generalization difficulty.

---

## Fusion Stability
Training multi-modal systems remains optimization-intensive.

---

# Future Research Directions

Planned future work includes:
- full hyperspectral branch implementation
- transformer-based fusion architectures
- cross-modal attention mechanisms
- explainable AI for spectral interpretation
- embedding visualization
- self-supervised spectral pretraining
- contrastive multi-modal learning
- class activation mapping for disease localization
- larger-scale agricultural evaluation
- improved representation alignment methods

---

# Overall Significance

This project combines:
- deep learning
- remote sensing
- agricultural AI
- spectral representation learning
- multi-modal fusion research

It goes beyond standard image classification and explores how heterogeneous sensing technologies can be integrated for intelligent agricultural monitoring systems.

The project is designed not only to improve classification accuracy but also to better understand:
- modality behavior
- spectral feature learning
- fusion dynamics
- representation alignment across sensing domains.`,
},


  // ===== PROJECT 4 =====
//   {
//     id: "anomaly-detection",
//     title: "Real-Time Anomaly Detection",
//     description:
//       "A streaming ML pipeline that detects anomalies in real-time data feeds using ensemble methods and deep autoencoders, with live monitoring dashboards.",
//     longDescription:
//       "Engineered a real-time anomaly detection system processing 10K+ events/second. Uses Apache Kafka for stream ingestion, PySpark for feature engineering, and an ensemble of isolation forest + LSTM autoencoder for detection. Grafana dashboards provide real-time visibility.",
//     techStack: ["Apache Kafka", "PySpark", "TensorFlow", "Grafana", "Docker", "PostgreSQL"],
//     imageUrl: "/images/projects/project-4.webp",
//     githubUrl: "https://github.com/subhamdangar/anomaly-detection", // ===== REPLACE =====
//     demoUrl: "https://anomaly-detection-demo.vercel.app", // ===== REPLACE WITH YOUR DEMO URL =====
//     category: "Machine Learning",

//     aiContext: `**Real-Time Anomaly Detection** is a streaming ML pipeline for live anomaly detection.

// **Architecture:**
// - Ingestion: Apache Kafka handles high-throughput event streaming (10K+ events/sec)
// - Processing: PySpark Structured Streaming for real-time feature engineering
// - Detection: Ensemble model combining Isolation Forest (statistical) + LSTM Autoencoder (deep learning)
// - Storage: PostgreSQL stores detected anomalies and historical data
// - Monitoring: Grafana dashboards visualize real-time metrics and alerts

// **Key Technologies:**
// - Apache Kafka for distributed event streaming
// - PySpark for scalable stream processing
// - TensorFlow for LSTM autoencoder training
// - Grafana for real-time monitoring dashboards
// - Docker for containerized deployment
// - PostgreSQL for persistence

// **Notable Features:**
// - Processes 10,000+ events per second with sub-second latency
// - Ensemble approach reduces false positives by 40%
// - Auto-retraining pipeline when data drift is detected
// - Configurable alerting thresholds per metric
// - Historical anomaly replay for investigation`,
//   },

  // ===== PROJECT 5 =====
//   {
//     id: "neural-style-transfer",
//     title: "Neural Style Transfer App",
//     description:
//       "A web application that applies artistic styles to photos using deep neural networks. Upload any image and transform it into artwork inspired by famous painters.",
//     longDescription:
//       "Implemented neural style transfer using VGG-19 feature extraction with optimization-based and feed-forward approaches. The feed-forward model enables real-time style transfer. Deployed as a Flask API with a React frontend, containerized with Docker.",
//     techStack: ["PyTorch", "Flask", "React", "Docker", "VGG-19", "Pillow"],
//     imageUrl: "/images/projects/project-5.webp",
//     githubUrl: "https://github.com/subhamdangar/style-transfer", // ===== REPLACE =====
//     demoUrl: "https://style-transfer-demo.vercel.app", // ===== REPLACE WITH YOUR DEMO URL =====
//     category: "Deep Learning",

//     aiContext: `**Neural Style Transfer App** is a deep learning web app for artistic image transformation.

// **Architecture:**
// - Feature Extraction: VGG-19 pretrained network extracts content and style features
// - Style Transfer: Two approaches — optimization-based (Gatys et al.) and feed-forward (Johnson et al.)
// - Backend: Flask serves the ML inference API
// - Frontend: React app with drag-and-drop image upload
// - Deployment: Dockerized for consistent deployment

// **Key Technologies:**
// - PyTorch for model implementation and inference
// - VGG-19 for feature extraction (pretrained on ImageNet)
// - Flask for the REST API backend
// - React for the interactive frontend
// - Docker for containerization
// - Pillow for image preprocessing and postprocessing

// **Notable Features:**
// - Real-time style transfer with feed-forward model (~100ms per image)
// - Multiple preset styles (Van Gogh, Monet, Picasso, etc.)
// - Custom style upload: use any image as a style reference
// - Adjustable style strength slider
// - Before/after comparison view`,
//   },

  // ===== ADD YOUR NEW PROJECTS BELOW =====
  // Copy one of the objects above and modify it.
  // Remember: set demoUrl to null if no live demo exists.
  // Remember: write detailed aiContext for better chatbot answers!
];
