1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

    Ans:  We use **getElementById, getElementsByClassName, and querySelector / querySelectorAll** to find elements from the DOM and work with it. After selecting we can change content, apply styles, attach events, or add/remove elements.

    - **getElementById** used for selecting a unique element by ID. It works fast between them because IDs are unique. 

    - **getElementsByClassName** will be best when we want all elements with the same class. It can returns multiple elements because class name can be common. It catch the elements by class name. 

    - **querySelector** returns the first matching element or null if not found. Its Very flexible because It supports all CSS selectors (id, class, tag, attribute, pseudo-classes, etc.).

    - **querySelectorAll** Returns a static nodelist of all matching elements. We can use it when need to select multiple elements with a CSS selector.




2. How do you **create and insert a new element into the DOM**?

    Ans: I will use **document.createElement()** for create a new element. Then you can set text, classes, id, styles, or attributes. 
    I will use **appendChild()** to insert into the DOM. Or I can use **append, prepend, before, after** if needed specific location.





3. What is **Event Bubbling** and how does it work?

    Ans: When an event happens, it doesn't just run once. it passes through 3 phases (**Capturing, Target, and Bubbling**). 

    **Event Bubbling:** - The event first runs on the target element (Clicked element). Then it “bubbles up” to its parent, then grandparent, and so on, until it reaches the root element. Rather of attaching listeners to numerous child elements, you can add one listener to a parent and handle events as they bubble up.




4. What is **Event Delegation** in JavaScript? Why is it useful?

    Ans: **Event delegation** is a technique in JavaScript where instead of attaching listeners to numerous child elements, you attach a single listener to their parent.

    **Why it is useful:**
    - Save memory and Improves efficiency
    - Works even for dynamically added elements, since the parent listener still captures their events.
    - Provides a single, central place to manage events.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

    Ans: 
    **event.preventDefault()**
    - Stops the default action of an element.
    - Does NOT stop the event from bubbling/capturing.
    - Prevent form submission, prevent link navigation, disable right-click menu, etc.


    **event.stopPropagation()**
    - Stops the event from bubbling up (or capturing down) the DOM tree.
    - Does NOT prevent default browser behavior.
    - When you don’t want parent elements’ event handlers to run.