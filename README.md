# Quiz Application

This is a multiple-choice quiz application based on categories. Users can select a category and see questions related to that category. The application uses React and Material-UI for the user interface and a state store to manage categories and questions.

## Features

- Category selection for the quiz.
- Dynamic change of category image based on selection.
- Responsive and modern UI using Material-UI.

## Technologies Used

- **React:** Library for building user interfaces.
- **Material-UI:** React component library for design.
- **TypeScript:** A superset of JavaScript that adds static types.
- **Zustand:** State management library.

## Installation

To install and run this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
2. **Navigate to the project directory:**

   ```bash
   cd your-repository
3. **Install dependencies:**

   ```bash
   npm install
4. **Start the application in development mode:**

   ```bash
   npm start
This will open the application in your browser at http://localhost:3000.

## Project Structure

- **`public/`**: Folder for static assets that are publicly accessible.
  - **`css3.json`**: Data file for CSS3 questions.
  - **`html5.json`**: Data file for HTML5 questions.
  - **`javascript.json`**: Data file for JavaScript questions.
  - **`python.json`**: Data file for Python questions.
  - **`react.json`**: Data file for React questions.
  - **`QME_logo_rmvd.json`**: Icon for the application.

- **`src/`**: Main folder for the application's source code.
  - **`components/`**: Reusable React components.
    - **`CategorySelector.tsx`**: Component for selecting the quiz category.
    - **`Footer.tsx`**: Component for the footer of the application.
    - **`Game.tsx`**: Component for the game view where questions are displayed.
    - **`Start.tsx`**: Component for the start screen or introduction.
    - **`JavaScriptLogo.tsx`**, **`Html5Logo.tsx`**, **`Css3Logo.tsx`**, **`PythonLogo.tsx`**, **`ReactLogo.tsx`**: Logo components for each category.
  - **`store/`**: Folder for state management.
    - **`questions.ts`**: Zustand store setup for managing questions and categories.
  - **`hooks/`**: Folder for custom hooks.
    - **`useQuestionData.ts`**: Custom React hook designed to manage and fetch question data.
  - **`types/`**: Folder for TypeScript type definitions.
    - **`types.d.ts`**: TypeScript type definitions used throughout the application.
  - **`App.css`**: Global styles file.
  - **`main.tsx`**: Entry point of the React application where the root component is rendered.
  - **`App.tsx`**: Main component of the application.

## Usage
1. **Select a category:**  Use the CategorySelector component to choose the quiz category. The selected category will update the source from wich it loads the questions, the image and title in the application and it will Load 10 random questions.

![](path/public/Usage1.png)

2. **View questions:** If there are questions available for the selected category, they will be displayed in the Game component. If there are no questions, the Start component will be shown.

3. **Restart:** You can press the restart button to restart the game and choose category again.

4. **Aditional info:** The game stores all the app information in `LocalStorage` so you can reload the page and keep your progress. 

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your changes:**

   ```bash
   git checkout -b your-branch-name
3. **Make your changes and commit:**

   ```bash
   git commit -am 'Add some feature'
4. **Push your changes to the remote repository:**

   ```bash
   git push origin your-branch-name
5. **Create a pull request on GitHub.**

<!-- ## License
This project is licensed under the MIT License. See the LICENSE file for details. -->

## Links
- [GitHub Repository](https://github.com/your-username/your-repository)
- [Live Application](https://your-app-live-url.com)

## Contact
For any inquiries, please contact [alvaromfdv@gmail.com](mailto:alvaromfdv@gmail.com).

## References
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Material-UI Documentation](https://mui.com/getting-started/installation/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
