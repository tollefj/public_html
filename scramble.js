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
const llmSlander = [
    "LLMs: excellent at predicting the next word, not so much at understanding it.",
    "Hallucination isn’t a bug, it’s a feature of overconfident probability distributions.",
    "Scaling laws say 'bigger is better'; real-world constraints say otherwise.",
    "Prompt engineering: iterating until the model stumbles onto the right answer.",
    "Self-attention: a computationally expensive way to rediscover dependencies.",
    "Training LLMs: when adding more parameters works better than adding more reasoning.",
    "Fine-tuning: making minor adjustments to a model that already memorized half the internet.",
    "Instruction tuning: aligning models by selectively reinforcing preferred errors.",
    "Beam search: picking the least improbable mistake at every step.",
    "Temperature tuning: deciding between deterministic mistakes and more creative ones.",
    "Logits: where probability meets misplaced confidence.",
    "Attention heads: half of them redundant, the other half barely interpretable.",
    "Emergent abilities: unexpected behaviors we take credit for after the fact.",
    "Positional encodings: a workaround for transformers’ inability to handle sequence order natively.",
    "Sparse attention: an attempt to make transformers scalable before we run out of compute.",
    "Your model isn’t thinking—it’s just reassembling text fragments statistically.",
    "Layer normalization: an essential trick to keep gradients from going off the rails.",
    "Multi-modal models: generalizing across modalities, but not necessarily improving at any.",
    "Batch size tuning: trade-offs between generalization, stability, and blowing up your GPU.",
    "Transformers: powerful, expensive, and still fundamentally predicting the next token.",
    "Training dynamics: the art of balancing convergence speed with not overfitting instantly.",
    "Data augmentation: because real-world datasets are never quite enough.",
    "Bias mitigation: removing obvious stereotypes while subtler ones persist.",
    "Reinforcement learning from human feedback: training models to mimic human-approved responses.",
    "Tokenization errors: where meaning is lost before the model even sees the data.",
    "Parameter sharing: efficiency gains at the cost of expressiveness.",
    "The secret to LLMs? More layers, more compute, and hoping generalization holds.",
    "Explainability: the ongoing challenge of interpreting a model with billions of parameters.",
    "Compression methods: reducing model size without completely destroying performance.",
    "Model alignment: making sure AI-generated text remains useful, safe, and not completely off-topic."
];

const el = document.querySelector(".text");
const fx = new TextScramble(el);
const next = () => {
    const randomIndex = Math.floor(Math.random() * llmSlander.length);
    fx.setText(llmSlander[randomIndex]).then(() => {
        setTimeout(next, 3000);
    });
};

next();
