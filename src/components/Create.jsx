import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { EventDetailContext } from '../contexts/EventDetailContext';

const schema = yup.object().shape({
  eventName: yup.string().required(),
  hostName: yup.string().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
  location: yup.string().required(),
});

const CreatePage = () => {
  let navigate = useNavigate();
  const eventContext = useContext(EventDetailContext);
  const [timeError, setTimeError] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    const { eventName, hostName, startTime, endTime, location  } = values;
    eventContext.eventName = eventName;
    eventContext.hostName = hostName;
    eventContext.startTime = startTime;
    eventContext.endTime = endTime;
    eventContext.location = location;
    navigate(`/detail`)
  }

  const dateTimeHandler = (time, event) => {
    setValue(time, event.target.value)
    const startTime = getValues().startTime;
    const endTime = getValues().endTime;

    if (startTime >= endTime) {
      setTimeError("Start time must not equal or greater than end time")
    } else {
      setTimeError("")
    }
  };

  console.log('err', errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text
        fontSize="36px"
        background="linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)"
        backgroundClip="text"
        sx={{ '-webkit-background-clip': 'text!important', '-webkit-text-fill-color': 'transparent!important'  }}
      >
        Create Event Form
      </Text>
      <FormControl marginTop={4} isInvalid={errors.eventName}>
        <FormLabel htmlFor='event-name'>Event name</FormLabel>
        <Input
          id='event-name'
          {...register('eventName')}
        />
        <FormErrorMessage>
          {errors.eventName && errors.eventName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl marginTop={4} isInvalid={errors.hostName}>
        <FormLabel htmlFor='host-name'>Host name</FormLabel>
        <Input
          id='host-name'
          {...register('hostName')}
        />
        <FormErrorMessage>
          {errors.hostName && errors.hostName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl marginTop={4} isInvalid={errors.startTime}>
        <FormLabel htmlFor='startTime'>Start Time</FormLabel>
        <Input
          id='startTime'
          type="date"
          onChange={(event) => dateTimeHandler('startTime', event)}
        />
        <FormErrorMessage>
          {errors.startTime && errors.startTime.message}
        </FormErrorMessage>
        {
          timeError !== '' &&  <Text color="red">{timeError}</Text>
        }
      </FormControl>
      <FormControl marginTop={4} isInvalid={errors.endTime}>
        <FormLabel htmlFor='endTime'>End Time</FormLabel>
        <Input
          id='endTime'
          type="date"
          onChange={(event) => dateTimeHandler('endTime', event)}
        />
        <FormErrorMessage>
          {errors.endTime && errors.endTime.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl marginTop={4} isInvalid={errors.location}>
        <FormLabel htmlFor='location'>Location</FormLabel>
        <Input
          id='location'
          {...register('location')}
        />
        <FormErrorMessage>
          {errors.location && errors.location.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        colorScheme='teal'
        isLoading={isSubmitting}
        background='linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)'
        type='submit'
        isDisabled={timeError !== ''}
        width='100%'
      >
        Submit
      </Button>
    </form>
  )
}
 
export default CreatePage;