import { Timeline } from "flowbite-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold } from "react-icons/pi";
import { motion } from "framer-motion";
import bio from '../../assets/how-works/bio.avif'
import match from '../../assets/how-works/match.jpg'
import happy from '../../assets/how-works/happy.avif'

const HowWorks = () => {
    return (
        <div className="mt-14">
            <SectionTitle

                heading={"Perfect Match"}
            ></SectionTitle>
            <div className="w-10/12 mx-auto">
                <Timeline horizontal>
                    <Timeline.Item>
                        <Timeline.Point>
                            <PiNumberOneBold className="text-6xl text-red-500" /> 
                        </Timeline.Point>
                        
                        <Timeline.Content>
                        <motion.img
                                src={bio}
                                alt="Step 1"
                                className="w-36 h-36 object-cover rounded-full"
                                animate={{ y: [0, -10, 0] }} 
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                            />
                        <Timeline.Time className="text-2xl">Step 1:</Timeline.Time>
                        <Timeline.Title className="text-red-500">Update Your Bio</Timeline.Title>
                            <Timeline.Body>
                                Create an engaging profile by adding your bio, interests, and preferences to help potential matches get to know you.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point>
                            <PiNumberTwoBold className="text-6xl text-red-500" /> 
                        </Timeline.Point>
                        <Timeline.Content>
                        <motion.img
                                src={match}
                                alt="Step 1"
                                className="w-36 h-36 object-cover rounded-full"
                                animate={{ y: [0, -10, 0] }} 
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                            />
                        <Timeline.Time className="text-2xl">Step 2:</Timeline.Time>
                        <Timeline.Title className="text-red-500">Search for Your Match</Timeline.Title>
                            <Timeline.Body>
                                Browse through profiles that match your preferences and connect with the one who captures your heart.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point>
                            <PiNumberThreeBold className="text-6xl text-red-500" /> 
                        </Timeline.Point>
                        <Timeline.Content>
                        <motion.img
                                src={happy}
                                alt="Step 1"
                                className="w-36 h-36 object-cover rounded-full"
                                animate={{ y: [0, -10, 0] }} 
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                            />
                            <Timeline.Time className="text-2xl">Step 3:</Timeline.Time>
                            <Timeline.Title className="text-red-500">Live Happily Ever After</Timeline.Title>
                            <Timeline.Body>
                                Begin your journey of love and companionship with the perfect partner, building a beautiful life together.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    );
};

export default HowWorks;
