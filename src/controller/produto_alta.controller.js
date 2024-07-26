
import * as produtoAltaRepository from '../repository/produto_alta.repository.js';

export const getAll = async (req, res) => {
  try {
    const produtos = await produtoAltaRepository.getAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json(`Èsse erro ${error}`);
  }
};

