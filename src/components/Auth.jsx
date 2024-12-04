import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Controller, useForm } from "react-hook-form";

const Auth = () => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRememberChecked, setIsRememberChecked] = useState(false);

	const onSubmit = (data) => console.log(data);

	return (
		<Tabs
			defaultValue="login"
			className="w-full max-w-[20rem] md:max-w-md absolute top-[25%]"
		>
			<TabsList className="grid w-full grid-cols-2 ">
				<TabsTrigger
					value="login"
					className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
				>
					Login
				</TabsTrigger>
				<TabsTrigger
					value="register"
					className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
				>
					Sign Up
				</TabsTrigger>
				<TabsContent value="login" className="w-full">
					<Card className="w-[20rem] md:w-[28rem]">
						<form action="login" onSubmit={handleSubmit(onSubmit)}>
							<CardHeader>
								<CardTitle>Login</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-1">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="Enter Email"
										onChange={(e) => setEmail(e.target.value)}
										{...register("email")}
									/>
								</div>
								<div className="space-y-1">
									<Label htmlFor="password">Password</Label>
									<Input
										type="password"
										id="password"
										placeholder="Enter Password"
										onChange={(e) => setPassword(e.target.value)}
										{...register("password", { required: true })}
									/>
									{errors.password && <span>This field is required</span>}
								</div>
								<div className="flex justify-between items-center mt-5">
									<div className="flex items-center space-x-2">
										{/* <input
											type="checkbox"
											id="remember"
											checked={remember}
											onChange={(e) => {
												const isChecked = e.target.checked;
												setRemember(isChecked);
												setValue("remember", isChecked);
											}}
											{...register("remember")}
										/> */}
										{/* <Checkbox
											id="remember"
											checked={isRememberChecked}
											onCheckedChange={(isRememberChecked) => handleToggle(isRememberChecked)}
											{...register("isRememberChecked", {value: !isRememberChecked})}
										/> */}
										<Controller
											name="remember"
											control={control}
											render={({ field: { value, onChange } }) => (
												<Checkbox
													className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
													id="remember"
													checked={value}
													onCheckedChange={(checked) => {
														// This ensures the checkbox can toggle between true and false
														onChange(checked === true);
													}}
												/>
											)}
										/>
										<Label htmlFor="remember">Remember me</Label>
									</div>
									<span className="hover:underline cursor-pointer text-sm md:text-[14px]">
										Forgot Password?
									</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button className="w-full bg-blue-500 hover:bg-blue-800">
									Login
								</Button>
							</CardFooter>
						</form>
					</Card>
					{/* {console.log(setIsRememberChecked)} */}
				</TabsContent>

				<TabsContent value="register" className="w-full">
					<Card className="w-[20rem] md:w-[28rem]">
						<CardHeader>
							<CardTitle>Sign Up</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="name">Name</Label>
								<Input id="name" type="text" placeholder="Enter Name" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="Enter Email" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									placeholder="Enter Password"
								/>
							</div>
						</CardContent>
						<CardFooter>
							<Button className="w-full bg-blue-500 hover:bg-blue-800">
								Create Account
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</TabsList>
		</Tabs>
	);
};

export default Auth;
