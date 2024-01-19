import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from "@ignite-ui/react"
import { Container, Header } from "../styles"
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInput,
  IntervalItem,
} from "./styles"
import { ArrowRight } from "phosphor-react"

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horário que você está disponível em cada dia da
          semana
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInput>
              <TextInput
                size="sm"
                type="time"
                crossOrigin=""
                step={60}
              ></TextInput>
              <TextInput
                size="sm"
                type="time"
                crossOrigin=""
                step={60}
              ></TextInput>
            </IntervalInput>
          </IntervalItem>

          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </IntervalDay>
            <IntervalInput>
              <TextInput
                size="sm"
                type="time"
                crossOrigin=""
                step={60}
              ></TextInput>
              <TextInput
                size="sm"
                type="time"
                crossOrigin=""
                step={60}
              ></TextInput>
            </IntervalInput>
          </IntervalItem>
        </IntervalContainer>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
