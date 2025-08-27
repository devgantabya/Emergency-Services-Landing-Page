1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:  We use **getElementById, getElementsByClassName, and querySelector / querySelectorAll** to find elements from the DOM and work with it. After selecting we can change content, apply styles, attach events, or add/remove elements.

   - **getElementById** used for selecting a unique element by ID. It works fast between them because IDs are unique. 

   - **getElementsByClassName** will be best when we want all elements with the same class. It can returns multiple elements because class name can be common. It catch the elements by class name. 

   - **querySelector** returns the first matching element or null if not found. Its Very flexible because It supports all CSS selectors (id, class, tag, attribute, pseudo-classes, etc.).

   - **querySelectorAll** Returns a static nodelist of all matching elements. We can use it when need to select multiple elements with a CSS selector.


2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?