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
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { getWeekDays } from "@/utils/get-week-days"

const timeIntervalsFormsSchema = z.object({})

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      Intervals: [
        {
          weekDay: 0,
          enable: false,
          startTime: "08:00",
          endTime: "18:00",
        },

        {
          weekDay: 1,
          enable: true,
          startTime: "08:00",
          endTime: "18:00",
        },

        {
          weekDay: 2,
          enable: true,
          startTime: "08:00",
          endTime: "18:00",
        },

        {
          weekDay: 3,
          enable: true,
          startTime: "08:00",
          endTime: "18:00",
        },

        {
          weekDay: 4,
          enable: true,
          startTime: "08:00",
          endTime: "18:00",
        },

        {
          weekDay: 5,
          enable: true,
          startTime: "08:00",
          endTime: "18:00",
        },

        {
          weekDay: 6,
          enable: false,
          startTime: "08:00",
          endTime: "18:00",
        },
      ],
    },
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: "Intervals",
  })

  async function handleSetTimeIntervals() {}

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

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Checkbox />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInput>
                  <TextInput
                    size="sm"
                    type="time"
                    crossOrigin=""
                    step={60}
                    {...register(`Intervals.${index}.startTime`)}
                  ></TextInput>
                  <TextInput
                    size="sm"
                    type="time"
                    crossOrigin=""
                    step={60}
                    {...register(`Intervals.${index}.endTime`)}
                  ></TextInput>
                </IntervalInput>
              </IntervalItem>
            )
          })}
        </IntervalContainer>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
