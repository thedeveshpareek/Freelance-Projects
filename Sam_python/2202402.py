# Question 1) You are given a list of numbers num. Write a function Exercise1(num)returning a list ans, such that ans[i] is equal to the product of all the numbers of ans except ans[i]. For example, if your input is num = [1,2,3,4],yourfunctionshouldreturn[24, 12, 8, 6].
# Note that to get the full mark, you are only allowed to use the built-in functions len(), range()and maybe reversed().

def Exercise1(num):
    ans = []
    for i in range(len(num)):
        ans.append(1)
        for j in range(len(num)):
            if i != j:
                ans[i] *= num[j]
    return ans

# Question 2) You are given an m × n matrix Exercise2(matrix)
# elements of the matrix in spiral order. Your code should work on any matrix (a nested list) with 𝑚 > 0 and 𝑛 > 0.

def Exercise2(matrix):
    ans = []
    while matrix:
        ans += matrix.pop(0)
        if matrix and matrix[0]:
            for row in matrix:
                ans.append(row.pop())
        if matrix:
            ans += matrix.pop()[::-1]
        if matrix and matrix[0]:
            for row in matrix[::-1]:
                ans.append(row.pop(0))
    return ans


# Question 3) You are given four lists nums1, nums2, nums3, and nums4, all of them with integer numbers as their items, and all of them with equal length n. Write a function Exercise3(nums1, nums2, nums3, nums4)thatreturnsthenumberoftuples(i, j, k, l)suchthat:
# 0 <= i, j, k, l < n
# nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
def Exercise3(nums1, nums2, nums3, nums4):
    # Initialize a counter to keep track of the number of tuples that satisfy the condition
    count = 0
    # Loop over all the possible values of i, j, k, and l
    for i in range(len(nums1)):
        for j in range(len(nums2)):
            for k in range(len(nums3)):
                for l in range(len(nums4)):
                    # Check if the condition is satisfied
                    if nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0:
                        # Increment the counter
                        count += 1
    # Return the counter
    return count


# Question 4) You are given an integer list height of length n. The integers inside the list are interpreted as nverticallinesdrawnsuchthatthetwoendpointsofthei-thline(inacartesianplane)are(i, 0) and(i, height[i]). This is illustrated below in red.
# Write a function Exercise4(height) such that it finds two lines that together with the x-axis form a container, such that the container contains the most water.
# Return the maximum amount of water a container can store.

# Hint (Two Pointer Approach): I recommend you review the two pointer approach in our reading list before approaching this exercise.
# Intuitively, the area formed between the lines will always be limited by the height of the shorter line. Furthermore, the farther the lines, the more will be the area obtained.
# We take two pointers, one at the beginning and one at the end of the array constituting the length of the lines. Further, we create and keep a variable maxarea to store the maximum area obtained till now. At every step, you have to find out the area formed between them, update maxarea and move the pointer pointing to the shorter line towards the other end by one step.
# How does this approach work?
# First consider the area constituting the exterior most lines. Then, to maximize the area, consider the area between the lines of larger lengths. If you try to move the pointer at the longer line inwards, you won't gain any increase in area, since it is limited by the shorter line. But moving the shorter line's pointer, it could turn out to be beneficial, as per the same argument (despite the reduction in the width). This is done since a relatively longer line obtained by moving the shorter line's pointer might overcome the reduction in area caused by the width reduction.

def Exercise4(height):
    # Initialize variables to store the maximum area and the left and right pointers
    max_area = 0
    left, right = 0, len(height) - 1
    # Keep looping until the left and right pointers meet
    while left < right:
        # Compute the current area
        current_area = (right - left) * min(height[left], height[right])
        # Update the maximum area if necessary
        max_area = max(max_area, current_area)
        # Move the pointer of the shorter line towards the other end
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    # Return the maximum area
    return max_area

# Question 5) You are given an unsorted list of integers nums.
# Write a function Exercise5(nums) that returns the length of the longest consecutive elements sequence.

def Exercise5(nums):
    # Edge case: empty list
    if not nums:
        return 0
    # Sort the list
    nums.sort()
    # Initialize variables to store the current and maximum lengths of consecutive sequences
    current_length = 1
    max_length = 1
    # Loop through the sorted list and update the lengths of consecutive sequences
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1] + 1:
            current_length += 1
            max_length = max(max_length, current_length)
        elif nums[i] == nums[i - 1]:
            pass
        else:
            current_length = 1
    # Return the maximum length
    return max_length


# Question 6) You are given a list of integers nums containing n+1 integers where each integer is in the range [1,n] inclusive. There is only one repeated number in nums. Write a function Exercise6(nums) that returns this repeated number.

def Exercise6(nums):
    # Initialize a set to store the unique elements in nums
    unique = set()
    # Loop through nums and check if each element is in the set
    for num in nums:
        if num in unique:
            # Return the repeated number
            return num
        else:
            # Add the element to the set
            unique.add(num)
    # If no repeated number is found, return None
    return None


# Question 7) You are given a string s and an integer k. Write a function Exercise7(s,k) that returns the length of the longest substring of s that contains at most k distinct characters.
def Exercise7(s, k):
    # Initialize variables to store the maximum length of a substring and the current length and character count
    max_length = 0
    curr_length = 0
    char_count = 0
    # Initialize a dictionary to store the number of occurrences of each character in the current substring
    char_dict = {}
    # Loop through the characters in s
    for i, c in enumerate(s):
        # Check if c is not in the dictionary or its count is zero
        if c not in char_dict or char_dict[c] == 0:
            # Increment the character count
            char_count += 1
        # Increment the count of c in the dictionary
        char_dict[c] = char_dict.get(c, 0) + 1
        # Increment the current length
        curr_length += 1
        # Check if the character count is greater than k
        while char_count > k:
            # Decrement the count of the first character in the current substring
            char_dict[s[i - curr_length]] -= 1
            # Check if the count of the first character is zero
            if char_dict[s[i - curr_length]] == 0:
                # Decrement the character count
                char_count -= 1
            # Decrement the current length
            curr_length -= 1
        # Update the maximum length if necessary
        max_length = max(max_length, curr_length)
    # Return the maximum length
    return max_length


# Question 8) You are given a list of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Write a function Exercise8(nums,k) which returns the max number of the sliding window. Note that k is always between 1 and len(nums). Also, len(nums) is always greater than or equal to 1. Additionally note that you function should return the result in the form of a list
def Exercise8(nums, k):
    # Edge case: empty list
    if not nums:
        return []
    # Initialize a list to store the maximum numbers of the sliding window
    max_nums = []
    # Initialize a deque to store the current window
    window = deque()
    # Loop through the elements in nums
    for i, num in enumerate(nums):
        # Remove elements that are out of the window
        while window and window[0] <= i - k:
            window.popleft()
        # Remove smaller elements in the window
        while window and nums[window[-1]] < num:
            window.pop()
        # Add the current element to the window
        window.append(i)
        # Append the maximum number in the current window to max_nums
        if i >= k - 1:
            max_nums.append(nums[window[0]])
    # Return max_nums
    return max_nums

# Question9)Yougettwostringssandtoflengthsmandnrespectively.WriteafunctionExercise9(s, t) that returnstheminimum windowsubstringofssuch that every character int(including duplicates) is included in the window. If there is no such substring, return the empty string "" (note that there is no space between quotation marks).
# Your solution will be tested against inputs whose answer is unique.

def Exercise9(s, t):
    # Edge case: empty string
    if not t:
        return ""
    # Initialize a dictionary to store the number of occurrences of each character in t
    t_dict = {}
    for c in t:
        t_dict[c] = t_dict.get(c, 0) + 1
    # Initialize variables to store the minimum window length and the indices of the minimum window
    min_length = float("inf")
    min_left, min_right = 0, 0
    # Initialize variables to store the current window length and the number of characters in the current window that are also in t
    curr_length = 0
    curr_count = 0
    # Initialize a dictionary to store the number of occurrences of each character in the current window
    curr_dict = {}
    # Initialize the left and right pointers
    left, right = 0, 0
    # Loop until the right pointer reaches the end of s
    while right < len(s):
        # Get the character at the right pointer
        c = s[right]
        # Increment the count of c in the current window
        curr_dict[c] = curr_dict.get(c, 0) + 1
        # Check if c is in t and the count of

# Question 10) Design a class with data structure properties that follows the constraints of a Least Recently Used (LRU)cache.ImplementtheCache class(YourclassnamemustbeCache(OrderedDict))suchthat:
#  Cache(int capacity) Initialize the LRU cache with positive size capacity. Note that in our tests, capacity is between 1 and 3000.
#  int get(int key)returnsthevalueofthekeyifthekeyexists,otherwisereturn-1.
#  void put(int key, int value)updatesthevalueofthekeyifthekeyexists.Otherwise,add the key-value pair to the cache. If the number of keys exceeds the capacity from this
# operation, evict the least recently used key.

from collections import OrderedDict

class Cache:
    def __init__(self, capacity):
        # Initialize the LRU cache with the given capacity
        self.cache = OrderedDict()
        self.capacity = capacity
        
    def get(self, key):
        # Check if the key exists in the cache
        if key not in self.cache:
            # Return -1 if the key does not exist
            return -1
        # Get the value of the key
        value = self.cache[key]
        # Move the key-value pair to the end of the OrderedDict to make it the most recently used
        self.cache.move_to_end(key)
        # Return the value
        return value
    
    def put(self, key, value):
        # Update the value of the key if it already exists in the cache
        if key in self.cache:
            self.cache[key] = value
            # Move the key-value pair to the end of the OrderedDict to make it the most recently used
            self.cache.move_to_end(key)
        else:
            # Add the key-value pair to the cache if the key does not exist
            self.cache[key] = value
            # If the number of keys exceeds the capacity, remove the least recently used key
            if len(self.cache) > self.capacity:
                self.cache.popitem(last=False)

# run the exercise1 function using the user input in main function
def main():
    # Read in the list of numbers for Exercise1
    print("Enter the list of numbers for Exercise 1: ", end="")
    nums = [int(x) for x in input().split()]
    # Call Exercise1 and store the result
    ans = Exercise1(nums)
    # Print the result of Exercise1
    print(ans)

    # Read in the dimensions of the matrix for Exercise2
    print("Enter the dimensions of the matrix for Exercise 2: ", end="")
    m, n = map(int, input().split())
    # Initialize the matrix
    matrix = []
    # Read in the elements of the matrix
    for i in range(m):
        row = [int(x) for x in input().split()]
        matrix.append(row)
    # Call Exercise2 and store the result
    spiral = Exercise2(matrix)
    # Print the result of Exercise2
    print(spiral)
    
    # Read in the lists of integers for Exercise3
    print("Enter the lists of integers for Exercise 3: ", end="")
    nums1 = [int(x) for x in input().split()]
    nums2 = [int(x) for x in input().split()]
    nums3 = [int(x) for x in input().split()]
    nums4 = [int(x) for x in input().split()]
    # Call Exercise3 and store the result
    count = Exercise3(nums1, nums2, nums3, nums4)
    print (count)   
    
     # Read in the list of integers for Exercise5
    print("Enter the list of integers for Exercise 5: ", end="")
    nums = [int(x) for x in input().split()]
    # Call Exercise5 and store the result
    longest = Exercise5(nums)
    # Print the result of Exercise5
    print(longest)
    
    #Read in the list of integers for Exercise4
    print("Enter the list of integers for Exercise 4: ", end="")
    height = [int(x) for x in input().split()]
    print(Exercise4(height))
    
    # Read in the list of integers for Exercise6
    nums = [int(x) for x in input().split()]
    # Call Exercise6 and store the result
    duplicate = Exercise6(nums)
    # Print the result of Exercise6
    print(duplicate)
    
    # Read in the string and integer for Exercise7
    s = input().strip()
    k = int(input())
    # Call Exercise7 and store the result
    longest_substring = Exercise7(s, k)
    # Print the result of Exercise7
    print(longest_substring)
    
      # Read in the list of integers and integer for Exercise8
    nums = [int(x) for x in input().split()]
    k = int(input())
    # Call Exercise8 and store the result
    max_numbers = Exercise8(nums, k)
    # Print the result of Exercise8
    print(max_numbers)
    
       # Read in the strings for Exercise9
    s = input().strip()
    t = input().strip()
    # Call Exercise9 and store the result
    min_window = Exercise9(s, t)
    # Print the result of Exercise9
    print(min_window)
    
    # the data of the exercise10
    # Read in the capacity for the Cache
    capacity = int(input())
    # Initialize the Cache
    cache = Cache(capacity)

    # Read in the list of operations to perform on the Cache
    operations = [input().split() for _ in range(int(input()))]
    # Perform each operation on the Cache
    for operation in operations:
        if operation[0] == "get":
            key = int(operation[1])
            # Call the get method and store the result
            value = cache.get(key)
            # Print the result of the get method
            print(value)
        elif operation[0] == "put":
            key = int(operation[1])
            value = int(operation[2])
            # Call the put method
            cache.put(key, value)

    
if __name__ == "__main__":
    main()

    