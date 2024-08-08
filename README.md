# Challenge App

## Overview

The Challenge App allows users to create, view, update, and delete challenges. Each challenge includes the month and description. The application features a frontend built with React.js and a backend powered by Spring Boot, using an H2 database and JPA for persistence.

### Application Flow Diagram

![Application Flow](https://github.com/yashbhardwaj11/ChallengeApp/blob/main/main_flow.png) 

## Features

- **Create Challenge**: Users can add new challenges with a month and description.
- **Read Challenges**: View a list of all challenges.
- **Update Challenge**: Modify existing challenge details.
- **Delete Challenge**: Remove challenges from the list.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Spring Boot
- **Database**: H2 (In-Memory)
- **Persistence**: JPA (Hibernate)

## Folder Structure

my-project/
│
├── frontend/ # Contains React frontend code
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── ...
│
├── backend/ # Contains Spring Boot backend code
│ ├── src/
│ ├── application.properties
│ ├── pom.xml (or build.gradle)
│ └── ...
│
├── docs/ # Contains project documentation, including images
│ └── app-flow.png # Flow diagram image
│
├── .gitignore # Common .gitignore
└── README.md

## Getting Started

### Clone the Repository

To get a local copy of the repository, clone it using:

```bash
git clone https://github.com/yashbhardwaj11/ChallengeApp.git
