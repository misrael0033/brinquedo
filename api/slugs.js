const fs = require('fs');
const path = require('path');

// Função para gerar um slug a partir de um título
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Substitui espaços e caracteres especiais por -
        .replace(/^-|-$/g, ''); // Remove traços no início e no final
}

// Função para verificar se o slug já existe
function slugExists(slug, slugs) {
    return slugs.includes(slug);
}

// Função para criar um slug único
function createUniqueSlug(title, existingSlugs) {
    let slug = generateSlug(title);
    let uniqueSlug = slug;
    let counter = 1;

    while (slugExists(uniqueSlug, existingSlugs)) {
        uniqueSlug = `${slug}-${counter}`;
        counter++;
    }

    return uniqueSlug;
}

// Função para atualizar o arquivo de slugs
function updateSlugsFile(slug) {
    const slugsFilePath = path.join(__dirname, 'slugs.json');
    let slugs = [];

    // Lê o arquivo existente de slugs, se existir
    if (fs.existsSync(slugsFilePath)) {
        const data = fs.readFileSync(slugsFilePath);
        slugs = JSON.parse(data);
    }

    // Adiciona o novo slug e salva
    slugs.push(slug);
    fs.writeFileSync(slugsFilePath, JSON.stringify(slugs, null, 2));
}

// Exporta as funções para uso em outros módulos
module.exports = {
    generateSlug,
    createUniqueSlug,
    updateSlugsFile
};