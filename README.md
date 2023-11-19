# React + TypeScript + Vite

This application constitutes a prototype aimed at developing a platform utilizing React, Vite, and TypeScript technologies, with the primary objective of efficiently obtaining information about companies.
After the user registers and logs in, a section will be available on the homepage where the user can input details about a company and press the search button. After the search, a component will appear presenting the company details, along with a print button to download a PDF containing those details.

These constitute the procedural steps required to perform the cloning of the project and its initiation:
- Clone the project
- Execute ```npm i``` to install the packages
- Create a ```.env``` file based on ```.env.example``
- Execute ```npm run dev``` in the terminal to initiate the application.
- Open a web browser and enter ```http://localhost:5173/```.

## Main implemented routes
- ```/``` -  This route represents the homepage where we can see the navbar.
- ```/login``` - The login page. For this page, I utilized the Yup and Formik libraries for validations.
- ```/register``` - The register page. For this page, I utilized the Yup and Formik libraries for validations.

## Most important libraries
- React-redux
- React-router-dom
- Tailwindcss
- Axios
- Yup
- Formik
- React-to-pdf

## ENV example
VITE_API_URL =

## Unfinished work
- Technical debt - The code requires restructuring. In essence, it is advisable to generate several smaller components and CSS classes that are essential across multiple pages.
- Paginate reviews - After resolving the issue with the Google API, pagination needs to be implemented for reviews.
- Images - Integration of images returned by the Google API into the 'Company Overview' section needs to be added.
