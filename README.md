# im-every-chipdip

A modern, responsive portfolio web application built with **React** for the frontend and **Node.js** for the backend. This project showcases your skills, projects, and experience while providing a platform for potential employers or clients to learn more about you.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- **Dynamic Projects Section**: Showcase your portfolio projects dynamically fetched from the backend.
- **Responsive Design**: Fully mobile-friendly layout.
- **Contact Form**: Functional contact form with email sending capabilities.
- **Error Messaging**: Toasts relay success / error messages from API
- **Coming Soon:**
- **Dark Mode**: Toggle between light and dark themes.
- **Authentication**: Login functionality for contract and consultation clients.
- **Stripe Payment Form**: Safely fulfill payments through user profile.

---

## Technologies Used

### Frontend:

- **React** (with Hooks)
- **React Router** for navigation
- **Styled Components** for styling
- **Axios** for API requests

### Backend:

- **Node.js** with **Express**
- **MongoDB** (or any other database) for data storage
- **Mongoose** for schema modeling
- **EmailJS** for handling email functionality

---

## Setup and Installation

### Prerequisites:

- Node.js (v14 or later)
- MongoDB (local or cloud)
- EmailJS (https://www.emailjs.com/)

### Steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/koyeary/im-every-chipdip.git
   cd im-every-chipdip
   ```

2. **Install Dependencies**:

   - For the frontend:
     ```bash
     cd client
     npm install
     ```
   - For the backend:
     ```bash
     npm install
     ```

3. **Set up Environment Variables**:

   - Create a `.env` file in the root directory with the following:

     ```env

     MONGO_URI=your-mongodb-connection-string
     EJS_PUBLIC_KEY=public-key
     EJS_PRIVATE_KEY=private-key
     ```

4. **Start the Application**:

   - Backend:
     ```bash
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../client
     npm start
     ```

5. **Access the Application**:  
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage

- Add your details in the `About` section via the backend.
- Update the `Projects` section by adding project details in the database.
- Use the contact form to receive inquiries directly in your email.

---

## Folder Structure

```
portfolio-project/
├── client/               # React frontend
│   ├── public/           # Static files
│   ├── src/              # Main application code
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── utils/        # Helper functions
│       └── App.js        # Main App component
├── server/               # Node.js backend
│   ├── controllers/      # API controllers
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   └── server.js         # Entry point for the backend
```

---

## Deployment

### Frontend:

Deploy on platforms like **Netlify** or **Vercel**.

### Backend:

Deploy on platforms like **Heroku** or **Render**.

### Environment:

Ensure to set up environment variables for production.

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add a new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to modify this README as per your specific project requirements.
