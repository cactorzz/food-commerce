import { useSnack } from "../../../hooks/useSnack"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function IceCreams() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title="Ice Creams" description="Nossas melhores sorvetes" />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  )
}
