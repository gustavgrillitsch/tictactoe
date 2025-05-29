import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function MyCarousel() {
    const myArray = [
        {
         title: "Tic Tac Toe",
         link: "/game"
        },
        {
            title: "Sudoku",
            link: "#"
        },
        {
            title: "Tetris",
            link: "#"
        }
    ];

    return (

        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {myArray.map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col gap-5 aspect-square items-center justify-center p-6">
                                    <div> {myArray[index].title} </div>

                                    <div><Link className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-800" href={myArray[index].link}> PLAY </Link></div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
