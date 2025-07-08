# React E-commerce Test

## Product Card UI Demo

This project features a modern, responsive Product Card component designed for scalable e-commerce applications. Each card presents a product image, name, price, variant selector, and an Add to Cart button, with clear feedback for out-of-stock items.

**Layout & UI/UX:**
- Product cards are arranged in a CSS grid, ensuring consistent alignment and spacing across all viewports.
- Each card maintains a fixed image area, clean typography, and a prominent call-to-action, adhering to contemporary e-commerce design standards.

**Responsiveness:**
- The interface is fully responsive, leveraging CSS grid and media queries to deliver an optimal experience on mobile, tablet, and desktop devices.
- Product cards and images scale fluidly, preserving usability and visual hierarchy at any screen size.

**Professional React Engineering:**
- The `ProductCard` component is modular, maintainable, and optimized for performance using `useMemo` to minimize unnecessary re-renders.
- PropTypes enforce type safety and serve as in-code documentation for component contracts.
- UI subcomponents (e.g., the wishlist button) are extracted for clarity, reusability, and separation of concerns.
- Event handlers and business logic are clearly named and encapsulated, supporting easy extension and debugging.

**Advanced Features:**
- **Real-time Search**: Debounced search functionality with 300ms delay for optimal performance
- **Smart Filtering**: Combined search, in-stock filtering, and rating-based filtering
- **Dynamic Sorting**: Price-based sorting (low to high, high to low)
- **Wishlist Integration**: Interactive heart button for product wishlisting
- **Product Ratings**: Star-based rating display with half-star support

**Demo Link:**
- [View Live Demo]([#](https://react-ecommerce-test-two.vercel.app/product)) 

---

## Deployment

To deploy this project, you can use platforms like Netlify, Vercel, or GitHub Pages. Simply connect your repository and follow the platform's deployment instructions. For a local production build:

```bash
npm run build
```

## Usage

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Visit `http://localhost:3000` to view the app.

## Features

- **Product Cards**: Modern, responsive product display with images, ratings, and variants
- **Search & Filter**: Real-time search with debouncing, stock filtering, and rating filters
- **Sorting**: Price-based sorting options
- **Wishlist**: Interactive wishlist functionality
- **Responsive Design**: Mobile-first approach with CSS Grid
- **Performance Optimized**: Memoization and debounced search for smooth UX

## Contribution

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. For major changes, open an issue first to discuss your ideas.

---
