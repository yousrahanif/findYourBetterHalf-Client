import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Button, Label, TextInput } from 'flowbite-react';

const Checkout = () => {
    const data = useLoaderData();
    const {user}=useContext(AuthContext)

    return (
        <div>
        <Helmet>
                   
                                   <title>LoveForever || Register </title>
                               </Helmet>
          <div className=" flex items-center justify-center mt-10  p-10">
        <div className="w-full max-w-md mx-auto">
           <h2 className="text-4xl font-bold text-center mb-4">Checkout Form</h2>
            <form  className="flex max-w-md flex-col gap-4 justify-center  border-2  p-4 ">


                 <div>
                    <div className="mb-2 block">
                        <Label htmlFor="biodataId" value="biodataId" />
                    </div>
                    <TextInput id="biodataId1" type="text" name="name" placeholder={data?.bioId}    readOnly />
                </div> 
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" name="email" placeholder={user?.email}   readOnly />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="stripe1" value="You card" />
                    </div>
                    <TextInput id="stripe1" type=" number" name="stripe" placeholder="card number" required />
                </div>


           
                
         
            </form>



            <p className="flex justify-center items-center p-4">
            <Button   className="bg-red-500" type="submit">Submit</Button>
            </p>
        </div>
    </div>
      </div>
    );
};

export default Checkout;