# Hashtable Implementation

## Summary
This project implements a Hashtable class with methods for setting, getting, checking, and listing keys, along with a custom hashing function.

## Description
The Hashtable class includes the following methods:
- `set(key, value)`: Adds a key-value pair to the hashtable.
- `get(key)`: Retrieves the value associated with the given key.
- `has(key)`: Checks if the key exists in the hashtable.
- `keys()`: Returns a list of all keys in the hashtable.
- `_hash(key)`: Hashes the key to an index in the collection.

## Approach & Efficiency
The hashtable uses separate chaining to handle collisions. The `_hash` method ensures keys are evenly distributed to minimize collisions.

## Solution
The solution includes the Hashtable class implementation and Jest tests to ensure functionality.

## Testing
Run the tests using the following command:

```bash
npm test
