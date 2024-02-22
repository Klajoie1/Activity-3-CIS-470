
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // Tests equilateral triangle at the minimum valid side length
test('Equilateral triangle with minimum valid side lengths', () => {
  expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
});

    // Tests equilateral triangle at the maximum valid side length
test('Equilateral triangle with maximum valid side lengths', () => {
  expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
});

    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // Verifies isosceles triangle classification with the smallest possible equal sides
test('Isosceles triangle with one side at minimum valid length', () => {
  expect(classifyTriangle(1, 2, 2)).toBe('Isosceles');
});

    // Ensures isosceles triangle classification with the largest possible equal sides
test('Isosceles triangle with one side at maximum valid length', () => {
  expect(classifyTriangle(200, 200, 199)).toBe('Isosceles');
});

    // Tests isosceles triangle classification with large side lengths
test('Isosceles triangle with large side lengths', () => {
  expect(classifyTriangle(150, 150, 100)).toBe('Isosceles');
});

    // Tests isosceles (equivalent to equilateral) triangle with all sides equal
test('Isosceles triangle that could also be classified as Equilateral', () => {
  expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
});
  
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // Verifies scalene triangle classification with mixed side lengths
test('Scalene triangle with mixed side lengths', () => {
  expect(classifyTriangle(12, 14, 15)).toBe('Scalene');
});

    // Tests scalene triangle classification with sides near the maximum valid limit
test('Scalene triangle with sides near the upper valid limit', () => {
  expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
});

    // Tests scalene triangle classification with consecutive side lengths
test('Scalene triangle with sides differing by 1', () => {
  expect(classifyTriangle(50, 51, 52)).toBe('Scalene');
});

    // Verifies scalene triangle classification with large sides differing by 10
test('Scalene triangle with large side lengths, differing by 10', () => {
  expect(classifyTriangle(190, 180, 170)).toBe('Scalene');
});

  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // Checks for error handling with a zero side length input
test('Triangle with a zero side length', () => {
  expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

    // Ensures error handling with a negative side length input
test('Triangle with a negative side length', () => {
  expect(classifyTriangle(-1, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

    // Tests error handling for side lengths exceeding the maximum limit
test('Triangle with a side length over 200', () => {
  expect(classifyTriangle(201, 50, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

    // Verifies error detection for cases where all side lengths are zero
test('Triangle with all sides of zero length', () => {
  expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

    // Checks error handling when only one side is within valid range and others exceed it
test('Triangle with one side valid and the others over 200', () => {
  expect(classifyTriangle(100, 201, 202)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

    // Tests error handling for non-integer input values
test('Triangle with non-integer input', () => {
  expect(classifyTriangle(10.5, 10.5, 10.5)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

    // Ensures error detection for input values significantly exceeding the specified range
test('Triangle with extremely large numbers', () => {
  expect(classifyTriangle(10000, 20000, 30000)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  });

// Verifies the detection of non-triangles when two sides sum to the third
test('Not a triangle when the sum of two sides equals the third', () => {
  expect(classifyTriangle(10, 5, 5)).toBe('Not a Triangle');
});

// Tests identification of non-triangles when the sum of two sides is less than the third
test('Not a triangle when the sum of two sides is less than the third', () => {
  expect(classifyTriangle(2, 1, 3)).toBe('Not a Triangle');
});

// Ensures correct identification of configurations that cannot form a triangle
test('Not a triangle when one side exceeds the sum of the other two', () => {
  expect(classifyTriangle(100, 50, 40)).toBe('Not a Triangle');
});


  
