function createAutoSlider(sliderId, wait = 3) {
    const slider = document.getElementById(sliderId)
    if (slider.children.length > 1) {
        const num = slider.children.length

        var scrollConst = slider.children[0].offsetWidth + 10

        var scrolled = 0
        var scrollVal = 0

        var animator
        function launchInterval() {
            animator = setInterval(function () {
                // the scroll const is being updated for everyframe, incase of a window size event
                scrollConst = slider.children[0].offsetWidth + 10

                scrollVal = scrollConst * scrolled


                slider.scrollTo({
                    left: scrollVal,
                    behavior: "smooth"
                })

                scrolled += 1

                if (scrolled == num) {
                    scrolled = 0
                }


            }, wait * 1000)
        }


        launchInterval()
        //////////////////

        // events to stop the animations
        slider.addEventListener("mouseenter", function (e) {
            clearInterval(animator)
        })

        slider.addEventListener("touchstart", function (e) {
            clearInterval(animator)
        })

        // events to start the animation
        slider.addEventListener("mouseleave", function (e) {
            launchInterval()
        })

        slider.addEventListener("touchend", function (e) {
            launchInterval()
        })
    }
}



