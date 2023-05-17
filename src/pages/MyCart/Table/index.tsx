import { useCart } from "../../../hooks/useCart"

import { TableDesktop } from "./TableDesktop"

export function Table() {
  const { cart } = useCart()

  if (cart.length === 0)
    return <h1>Ops! Parece que seu carrinho está vazio :(</h1>

  return <TableDesktop />
}
