# Left Join Utility for Hash Maps

This project implements a `leftJoin` utility function for JavaScript, designed to perform a LEFT JOIN operation between two hash maps. The primary use case is to combine synonyms and antonyms into a single data structure where each key from the first map is associated with both its synonym and an optional antonym from the second map.

## Project Structure

- `mapOperations.js`: Contains the core functionality including `createMapFromObject` and `leftJoin` functions.
- `mapOperations.test.js`: Contains tests for the utility functions using Jest.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone [your-repo-url]
   cd [your-repo-directory]
