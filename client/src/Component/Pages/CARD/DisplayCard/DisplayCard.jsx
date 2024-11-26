import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function DisplayCard({title ="this is sampel testing tittle" , intro ="we are trying to build something greate" , imageUrl = null}) {
  return (
    <Card className="bg-black/40 backdrop-blur-sm border-0 p-4 text-white">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">{title}</p>
      <small className="text-default-500">12 Tracks</small>
      <h4 className="font-bold text-large">Frontend Radio</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={270}
      />
    </CardBody>
  </Card>
  )
}
