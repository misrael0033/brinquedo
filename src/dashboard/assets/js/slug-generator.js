const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};

const generateSlug = (productName) => {
    const slug = slugify(productName);
    return slug;
};

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    const productInput = document.getElementById('product-name');
    const slugOutput = document.getElementById('slug-output');

    productInput.addEventListener('input', () => {
        const slug = generateSlug(productInput.value);
        slugOutput.value = slug;
    });
});