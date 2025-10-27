import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "../ui/textarea";
import { SelectDate } from "../date/SelectDate";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Cake, Wand2 } from "lucide-react";
import Image from "next/image";

export function SearchVenueService() {
  return (
    <div className="pt-44 px-6 md:px-20 lg:px-40">
      <Image
        src="/pro-izquierda.png"
        alt="Kids Party"
        width={130}
        height={130}
        className="object-cover mx-auto mb-6"
      />
      <h2 className="text-4xl font-bold text-[#1C3658] mb-6 text-center">
        How old is your kid?
      </h2>
      <div className="flex w-full flex-col gap-6 ">
        <Tabs defaultValue="venues">
          <TabsList className="w-full h-auto ">
            <TabsTrigger
              className="hover:cursor-pointer flex flex-col py-4 data-[state=active]:bg-[#F8BD36] "
              value="venues"
            >
              <Cake className="size-7 mr-2 text-[#1C3658] " />
              <span className="text-[#1C3658] group-data-[state=active]:text-white">
                Venues
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="hover:cursor-pointer flex flex-col py-4 data-[state=active]:bg-[#F8BD36] "
              value="services"
            >
              <Wand2 className="size-7 mr-2 text-[#1C3658] " />
              <span className="text-[#1C3658] group-data-[state=active]:text-white">
                Services
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="venues">
            <Card className="bg-[#1C3658]">
              <CardContent className="grid grid-cols-3 gap-6">
                <div className="grid gap-3">
                  <SelectDate />
                </div>
                <div className="grid gap-3">
                  <Label
                    className="text-lg  font-normal text-white"
                    htmlFor="tabs-demo-username"
                  >
                    How many kids are going to be invited *
                  </Label>
                  <Input
                    className="!text-base !text-[#1C3658] bg-white placeholder:text-[#1C3658]/60"
                    id="tabs-demo-username"
                    placeholder="Enter number of kids"
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    className="text-lg  font-normal text-white"
                    htmlFor="tabs-demo-username"
                  >
                    Any preferences on party?
                  </Label>
                  <Input
                    className="!text-base !text-[#1C3658] bg-white placeholder:text-[#1C3658]/60"
                    id="tabs-demo-username"
                    placeholder="Active"
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    className="text-lg  font-normal text-white"
                    htmlFor="tabs-demo-username"
                  >
                    First Name
                  </Label>
                  <Input
                    className="!text-base !text-[#1C3658] bg-white placeholder:text-[#1C3658]/60"
                    id="tabs-demo-username"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    className="text-lg  font-normal text-white"
                    htmlFor="tabs-demo-username"
                  >
                    Your Email
                  </Label>
                  <Input
                    className="!text-base !text-[#1C3658] bg-white placeholder:text-[#1C3658]/60"
                    id="tabs-demo-username"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    className="text-lg  font-normal text-white"
                    htmlFor="tabs-demo-username"
                  >
                    Location
                  </Label>
                  <Select>
                    <SelectTrigger className="!text-base !text-[#1C3658] bg-white w-full hover:cursor-pointer">
                      <SelectValue placeholder="Select a location of Houston" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Locations</SelectLabel>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="apple"
                        >
                          Downtown
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="banana"
                        >
                          Midtown
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="blueberry"
                        >
                          Uptown
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="grapes"
                        >
                          Montrose
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="pineapple"
                        >
                          River Oaks
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="a">
                          West University
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="b">
                          Memorial
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="c">
                          Katy
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="d">
                          Sugar Land
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="e">
                          The Woodlands
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="f">
                          Clear Lake
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="g">
                          Spring Branch
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3 col-span-3">
                  <Label
                    className="text-lg  font-normal text-white"
                    htmlFor="tabs-demo-username"
                  >
                    Additional Message
                  </Label>
                  <Textarea
                    className="!text-base text-[#1C3658] bg-white placeholder:text-[#1C3658]/60"
                    id="tabs-demo-username"
                    placeholder="Enter your additional message"
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="golden" size="golden">
                  Explore Venues
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="services">
            <Card className="bg-[#1C3658]">
              <CardContent className="grid grid-cols-3 gap-6">
                <div className="grid gap-3">
                  <Label
                    htmlFor="tabs-demo-current "
                    className="text-lg  font-normal text-white"
                  >
                    Type of service
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full hover:cursor-pointer !text-base !text-[#1C3658] bg-white">
                      <SelectValue placeholder="Select a type of service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Services</SelectLabel>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="apple"
                        >
                          Food
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="banana"
                        >
                          Decoration
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="blueberry"
                        >
                          Inflatables
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="grapes"
                        >
                          Entertainment
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="ass"
                        >
                          Rentals
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <SelectDate />
                </div>
                <div className="grid gap-3">
                  <Label
                    htmlFor="tabs-demo-new "
                    className="text-lg  font-normal text-white"
                  >
                    Location
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full hover:cursor-pointer !text-base !text-[#1C3658] bg-white">
                      <SelectValue placeholder="Select a location of Houston" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Locations</SelectLabel>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="apple"
                        >
                          Downtown
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="banana"
                        >
                          Midtown
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="blueberry"
                        >
                          Uptown
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="grapes"
                        >
                          Montrose
                        </SelectItem>
                        <SelectItem
                          className="hover:cursor-pointer"
                          value="pineapple"
                        >
                          River Oaks
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="a">
                          West University
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="b">
                          Memorial
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="c">
                          Katy
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="d">
                          Sugar Land
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="e">
                          The Woodlands
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="f">
                          Clear Lake
                        </SelectItem>
                        <SelectItem className="hover:cursor-pointer" value="g">
                          Spring Branch
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3 col-span-3">
                  <Label
                    htmlFor="tabs-demo-new"
                    className="text-lg  font-normal text-white"
                  >
                    Additional info
                  </Label>
                  <Textarea
                    id="tabs-demo-new"
                    placeholder="Enter your additional message"
                    className="!text-base !text-[#1C3658] bg-white placeholder:text-[#1C3658]/60"
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="golden" size="golden">
                  Explore Services
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
