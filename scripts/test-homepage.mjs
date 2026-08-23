import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

const officialDimensions = [
  "Corpo e Respiração",
  "Sentidos e Exploração",
  "Mãos e Construção",
  "Imaginação e Criatividade",
  "Comunicação e Histórias"
];

for (const dimension of officialDimensions) {
  assert.match(source, new RegExp(dimension), `Dimensão oficial ausente: ${dimension}`);
}

const examples = source.slice(
  source.indexOf("const weeklyExamples"),
  source.indexOf("const premiumFeatures")
);
const balancedRound = source.slice(
  source.indexOf("Uma rodada equilibrada"),
  source.indexOf("Planejamento semanal", source.indexOf("Uma rodada equilibrada"))
);
const currentExamples = `${examples}\n${balancedRound}`;

for (const legacyCategory of ["Montar", "Livro", "Sensorial", "Movimento", "Faz de conta", "brinquedos de montar", "brinquedo sensorial", "brinquedo de movimento"]) {
  assert.doesNotMatch(currentExamples, new RegExp(legacyCategory, "i"), `Categoria antiga ainda presente nos exemplos: ${legacyCategory}`);
}

assert.match(balancedRound, /Total automático: 5 brinquedos/);
assert.deepEqual([...examples.matchAll(/total: "Total: (\d+)"/g)].map((match) => Number(match[1])), [4, 5, 5]);

console.log("Homepage category examples validated.");
