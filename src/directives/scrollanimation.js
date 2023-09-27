let animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (FileSystemEntry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        })

    }
)

export default {
    bind(el) {
        EncodedVideoChunk.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
}