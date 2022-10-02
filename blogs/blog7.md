### 10/01/22

#### End of bootcamp week 2
---

### **Weekly reflection**<br>

### Weather app project
        This weeks project was to build a weather app. It definitely a step up interms of logical work load from last week. I started pseudocoding earlier than usual so that helped me quite a bit.
        I spent most of my time trying to keep my code clean and readable. In the past I've gone into projects just throwing lines of code out to get things working and that has made my code very disorganized. So this week my pursuit of clean code started with learning how to build a helper function for creating and appending child elements. Since I pseudocoded it function, it went together pretty smooth. Once I had that function in place, it was really easy to build the structure of the page with an event listener. 
~~~ 
function createLayout(parentEl, tag, text, className, idName,) {
    // creates element based on tag input
    // Example 'div' creates a div element
    let element = document.createElement(tag)
    // Takes value of text and places it in innerText of
    // the element being created
    element.innerText = text

    // If className exists
    if (className) {
        // Set class attribute of element = className
        element.setAttribute('class', className)
    };
    // If idName exists
    if (idName) {
        // Set id attribute of element = idName
        element.setAttribute('id', idName)
    }
    // parentEl = parent element
    // places the element being created inside parentEl
    parentEl.appendChild(element)
}

 ~~~


---

- **What did you learn about that helped you understand the development process?**<br>
This week we learned about setting up functions for code that will be repeated. This makes the build process go smoother as there is less pointless repetition. I've been really interested in finding new ways to make my code cleaner and more readable. I feel like my code this week was a great improvement on previous projects due to the helper functions that I learned to implement.
- **What does it mean to develop good code?**<br>
I think good code is set up to be readable and concise. I would say that code that is too concise probably wouldnt translate well to being easily editable but a wall of code isn't readable enough to be understood. These are just my inexperienced generalizations, I'm still learning what 'good code' is and I feel that this will be a life long pursuit.
- **What does it mean to be a good developer?**<br>
I would say a good developer is good at working with people, is humble enough to ask for help, and is organizing in completing tasks.
- **What is one thing that programmers hate doing?**<br>
I don't know that I can speak for all programers but I definitely hate being stuck on problems.
<style>

    body{
        background-color: #4a6350;
        color: black;
    }

    .markdown-body pre{
        background-color: black;
        opacity: 0.5;
    }

   
</style>