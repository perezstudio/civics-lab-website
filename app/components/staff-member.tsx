interface StaffMemberProps {
    name: string
    title: string
    image: string
    location: string
}

export default function StaffMember({ name, title, image, location }: StaffMemberProps) {
    return (
        <div className="flex flex-col gap-2">
            <img 
                src={image} 
                alt={name} 
                className="w-36 h-36 aspect-square object-cover rounded-full" 
            />
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-slate-950">{name}</h3>
                <p className="text-sm text-slate-600 font-semibold">{title}</p>
                <p className="text-xs text-slate-400 font-bold uppercase">{location}</p>
            </div>
        </div>
    )
} 