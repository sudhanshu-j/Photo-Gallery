# Photo Gallery Website 📸🌍

Welcome to the **Photo Gallery Website** repository! This is a simple yet beautiful photo gallery that allows users to filter and view images based on different categories, such as **India**, **Thailand**, **Bali**, **Vietnam**, and more. The gallery is built using HTML, CSS, and JavaScript.

---

## 🚀 Features

- **Category Filter**: Click on different category links to filter images based on location (e.g., "India", "Thailand").

- **Interactive UI**: Smooth hover effects and transitions to enhance the user experience.

- **Responsive Design**: The layout adapts to various screen sizes (mobile, tablet, desktop).

- **Lightweight & Fast**: The gallery uses minimal resources, making it fast and responsive.

---

## 🛠️ Technologies Used

- **HTML**: For structuring the webpage content.

- **CSS**: For styling and creating a responsive design.

- **JavaScript**: For adding interactivity to the gallery, such as image filtering.

- **Font Awesome**: For using icons (View, Edit) in the gallery overlay.

---

## 📂 Project Structure

```bash
Photo-Gallery-Website/
│
├── index.html           # Main HTML file
├── style.css            # Styling for the website
├── script.js            # JavaScript file for filtering images
├── images/              # Folder containing images for the gallery
│   ├── ind-1.jpg
│   ├── ind-2.jpg
│   ├── thai-1.jpg
│   └── ...
└── README.md            # Project documentation (this file)
```

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

- To get started with this project, first clone the repository to your local machine:

```bash
git clone https://github.com/sudhanshu-j/Photo-Gallery-Website.git
```

2. **Open `index.html`**

- Once you've cloned the repository, open the index.html file in your browser to view the photo gallery in action. You can simply double-click the index.html file, and it will open in your default browser.

---

## 🔧 How It Works

### HTML Structure

The gallery is structured with HTML. Here's a breakdown of the key parts:

- **`<section id="Projects">`**: Contains the filter links (categories) and the gallery grid.

- **`.items-links`**: A container for category links (e.g., "All Photos", "India", "Thailand").

- **`.gallery`**: The grid that holds all the images.

- **`.project-img`**: Each image is wrapped inside a `div` with this class.

- **`.overlay`**: Appears when you hover over an image, showing buttons like **View** and **Edit**.

### CSS Styling

The gallery is styled using CSS, which includes:

- **Flexbox and Grid Layout**: Used to position the filter links and images.

- **Hover Effects**: Added on the `.project-img` and `.item-link` for a better user experience.

- **Media Queries**: Ensures the gallery is responsive across all device sizes.

### JavaScript Functionality

The JavaScript file (`script.js`) provides the interactivity for the gallery:

- **Filtering**: When a user clicks a category link (e.g., "India"), the images in that category are displayed while others are hidden.

- **Active State**: The category link that was clicked gets highlighted by adding an `.active` class.

#### Here's a summary of how the filtering works:

- Each image is associated with a `data-name` attribute indicating its category (e.g., "india", "thailand").

- When a filter link is clicked, the images are displayed or hidden based on the selected category.

---

<!-- ## 🖼️ Gallery Preview

Here’s a preview of how the gallery looks:

![Gallery Preview](https://via.placeholder.com/600x400.png?text=Photo+Gallery+Preview)

--- -->

## 📱 Mobile-First Design

This gallery is **responsive** and works well on mobile devices. The layout adjusts to fit smaller screens by switching to a single-column view for mobile users.

---

## 🧑‍💻 Contributing

We welcome contributions! To contribute to the project:

1. **Fork the repository**.

2. **Create a new branch** (`git checkout -b feature-name`).

3. **Make your changes and commit them** (`git commit -m 'Add new feature'`).

4. **Push to your forked repository** (`git push origin feature-name`).

5. **Open a pull request with a description of the changes**.

---

## 📢 Acknowledgments

- **Font Awesome**: For the icons used in the project.

- **Google Fonts**: For the beautiful font (Edu VIC WA NT Beginner).

- **MDN Web Docs**: For providing extensive documentation and resources on web development.

---

## 📝 Notes

- Make sure to place your images in the `images/` folder in the correct format (e.g., `.jpg`, `.png`).

- Ensure that the `data-name` attribute in the images and filter links are correctly mapped to filter categories.

---

<!-- ## 👀 Screenshot of the Gallery in Action

![Gallery Screenshot](https://via.placeholder.com/1200x800.png?text=Gallery+Screenshot)

--- -->

Thank you for checking out this project! 😊 If you have any questions, feel free to open an issue or submit a pull request. Enjoy exploring the gallery! 🎉
