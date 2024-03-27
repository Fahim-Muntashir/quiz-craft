import {
    Button,
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";

export function AddQuizForm() {
    return (
        <Card placeholder={""} color="transparent" shadow={false}>
            <Typography placeholder={""} variant="h4" color="blue-gray">
                Add Quiz            </Typography>
            <Typography color="gray" placeholder={""} className="mt-1 font-normal">
                Please Add Your Quiz Below
            </Typography>
            <form className="mt-8 mb-2 w-full ">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Typography placeholder={""} variant="h6" color="blue-gray" className="">
                            Questions
                        </Typography>
                        <Input
                            crossOrigin={""}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                    </div>
                    <div >
                        <Typography placeholder={""} variant="h6" color="blue-gray" className="">
                            Description
                        </Typography>
                        <Input
                            crossOrigin={""}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                    </div>
                    <div>
                        <Typography placeholder={""} variant="h6" color="blue-gray" className="">
                            Option 1
                        </Typography>
                        <Input
                            crossOrigin={""}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                    </div>
                    <div >
                        <Typography placeholder={""} variant="h6" color="blue-gray" className="">
                            Option 3
                        </Typography>
                        <Input
                            crossOrigin={""}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                    </div>
                    <div>
                        <Typography placeholder={""} variant="h6" color="blue-gray" className="">
                            Option 3
                        </Typography>
                        <Input
                            crossOrigin={""}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                    </div>
                    <div >
                        <Typography placeholder={""} variant="h6" color="blue-gray" className="">
                            Option 4
                        </Typography>
                        <Input
                            crossOrigin={""}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                    </div>
                    <div >
                        <Typography placeholder={""} variant="h6" color="blue-gray" className="">
                            Correct Answer
                        </Typography>
                        <Input
                            crossOrigin={""}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                    </div>


                </div>
                <div className="flex justify-end">
                    <Button size="sm" placeholder={""}>
                        Add Quiz
                    </Button>
                </div>

            </form>
        </Card>
    );
}