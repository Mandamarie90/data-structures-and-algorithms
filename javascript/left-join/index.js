
export function createMapFromObject(obj) {
  return new Map(Object.entries(obj));
}


export function leftJoin(hashmap1, hashmap2) {
  const leftJoinResult = new Map();


  for (const [key, value] of hashmap1.entries()) {
    const synonym = value;
    const antonym = hashmap2.get(key) || 'NULL'; // Use 'NULL' if no antonym exists
    leftJoinResult.set(key, [synonym, antonym]);
  }

  return leftJoinResult;
}
