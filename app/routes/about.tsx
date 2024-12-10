import { MetaFunction } from "@remix-run/node"
import { ClipboardList, GitPullRequestCreateArrow } from "lucide-react"
import { MapPinCheck } from "lucide-react"
import ServiceGrid from "~/components/service-grid"
import Button from "~/components/ui/button"
import StaffMember from "~/components/staff-member"

export const meta: MetaFunction = () => {
    return [
        { title: "About Us | Civics Lab" },
        { name: "description", content: "We’re a team of organizers, engineers, and data scientists fighting to create tools that help bring progressive change to underserved progressive communities." },
    ]
}

export default function AboutPage() {

    const playbook = [
        {
            text: "1",
            heading: "Strategic Partnerships",
            body: "We collaborate with local campaigns, county parties, and state parties to strengthen their organizing capacity. By working alongside these groups, we gain a first-hand understanding of their unique challenges and identify key areas for improvement.",
            variant: "global" as const
        },
        {
            text: "2",
            heading: "Problem-Solving Through Innovation",
            body: "Our team identifies logistical bottlenecks and inefficiencies that hinder effective organizing. We develop technical solutions to automate processes, streamline workflows, and empower organizations to work smarter, not harder.",
            variant: "global" as const
        },
        {
            text: "3",
            heading: "Accessible Tools for Underserved Communities",
            body: "We create products that ensure underserved and under-resourced organizations have access to modern organizing solutions. Our goal is to level the playing field by providing affordable, easy-to-use tools that support local efforts.",
            variant: "global" as const
        },
    ]

    const staffMembers = [
        {
            name: "Kevin Perez",
            title: "Founder & CEO",
            image: "/images/staff/kevin-perez.jpg",
            location: "Wisconsin"
        },
        {
            name: "Melanie Nowlin",
            title: "Director of Campaign Organizing",
            image: "/images/staff/kevin-perez.jpg",
            location: "North Carolina"
        },
        {
            name: "Aaron Lynch",
            title: "Director of Educational Solutions",
            image: "/images/staff/kevin-perez.jpg",
            location: "Ohio"
        },
        {
            name: "Dominic Perez",
            title: "Director of Digital Media",
            image: "/images/staff/kevin-perez.jpg",
            location: "Utah"
        },
        // Add more staff members here
    ]

    return (
        <main>
            <header id="header" className="px-4 sm:px-8 pt-12 sm:pt-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col items-center text-center gap-4 sm:gap-6">

                    {/* Subheading */}
                    <h2 className="text-6xl sm:text-5xl font-bold font-caveat text-blue-500">
                        Hello
                    </h2>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 max-w-4xl">
                        We're Civics Lab
                    </h1>

                    {/* Body */}
                    <p className="text-sm sm:text-base font-semibold text-slate-500 max-w-2xl">
                        We’re a team of organizers, engineers, and data scientists fighting to create tools that help bring progressive change to underserved progressive communities.
                    </p>

                    {/* Banner Image */}
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden">
                        <img
                        src="/images/about-us-banner.jpg"
                        alt="Staff At Civics Lab Meeting"
                        className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                        />
                    </div>
                    </div>
                </div>
            </header>
            <div className="w-full px-4 sm:px-8 py-16 sm:py-24">
                <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12">
                    <h2 className="text-4xl lg:text-6xl font-bold">We Do This
                        <br />
                        <span className="text-blue-500 font-bold font-caveat">For A Single Cause</span>
                    </h2>
                    <div className="flex flex-col gap-6">
                        <p>At Civics Lab, our mission is simple but powerful: to empower local organizations and county parties with the tools, resources, and knowledge they need to organize and mobilize effectively. Our leadership team brings decades of experience organizing for the Democratic Party and progressive candidates and organizations. We understand the unique challenges of grassroots organizing, especially in deep red states where local support systems are often under-resourced.</p>
                        <p>As a majority minority-owned company, we prioritize inclusivity and equity in everything we do. Our perspective is shaped by lived experiences, and we strive to create accessible, affordable solutions for local organizations that often operate with limited budgets.</p>
                        <p>Civics Lab was born from necessity. Over the years, we’ve seen firsthand how county parties and smaller campaigns struggle to manage complex stakeholder relationships, streamline operations, and ensure that vital data is shared and utilized properly. Our products and services are designed to fill this gap. From supplemental campaign support to design, marketing, and educational training, we are committed to providing county parties and local organizations with an affordable foundation for success.</p>
                        <p>We believe that effective local organizing is the cornerstone of lasting change. By supporting county parties and smaller campaigns, especially in deep red states, we aim to build a stronger, more connected progressive movement from the bottom up.</p>
                    </div>
                </div>
            </div>
            <ServiceGrid 
                id="playbook"
                heading="Explore Our Playbook" 
                services={playbook}
            />
            <div className="w-full px-4 sm:px-8 py-16 sm:py-24">
                <div className="max-w-7xl w-full mx-auto flex flex-col gap-6">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        Leadership Team
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 w-full">
                        {staffMembers.map((member) => (
                            <StaffMember
                                key={member.name}
                                name={member.name}
                                title={member.title}
                                image={member.image}
                                location={member.location}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}