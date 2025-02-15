class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = "!<>x-_\\/øæå[]{}—=+*^?#____";
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const phrases = [
    "LLMs: expensive parrots with bad memory.",
    "expectation: AGI. reality: AI-generated lorem ipsum.",
    "convinced my model to speak 50 languages. none of them well.",
    "neural scaling laws: where science meets bankruptcy.",
    "compression? sure, just remove the 'understanding' part.",
    "prompt engineering, mostly just trial and error.",
    "turning text into tensors and hoping for the best.",
    "masked language modeling: hide and seek, but painful.",
    "transformers solved NLP, except for all the parts they didn't.",
    "positional encodings are just fancy sine waves.",
    "training LLMs, debugging humanity.",
    "fine-tuning models, coarse-tuning expectations.",
    "tokenizing everything, then regretting it.",
    "making embeddings that hopefully mean something.",
    "layer norms and batch sizes: my daily struggles.",
    "backpropagating through bad life choices.",
    "more data, more layers, more problems.",
    "decoding text, encoding suffering.",
    "trying to make transformers less clueless.",
    "self-attention, but only for models.",
    "masked tokens, unmasked regrets.",
    "LLMs: too big to fail, too stupid to trust.",
    "teaching models to autocomplete my job.",
    "vanishing gradients, like my free time.",
    "logits, loss functions, and a little bit of luck.",
    "optimizing inference speed, not my workflow.",
    "designing architectures, forgetting deadlines.",
    "battling OOM errors one tensor at a time.",
    "deciphering attention heads like tea leaves.",
    "parameter count is not a personality trait (or is it?).",
    "transformers: the bigger they are, the dumber they act.",
    "sharding weights, fragmenting my sanity.",
    "writing tokenizers, questioning my own comprehension.",
    "tweaking hyperparameters like a mad scientist.",
    "sparsity: the dream, dense matrices: the reality."
];

const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1200);
    });
    counter = (counter + 1) % phrases.length;
};

next();
