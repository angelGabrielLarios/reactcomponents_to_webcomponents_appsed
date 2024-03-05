import wedding_ilustration from "/image/wedding_ilustration.svg"
import flowersvg from "/image/flower_purple.svg";

interface Props {
    wife: string
    husband: string
}
export const Invitation = ({ wife = 'esposa', husband = 'esposo' }: Props) => {
    return (
        <article className="relative p-6 space-y-4 bg-base-100 rounded-xl font-work w-full sm:w-[20rem]">

            <img
                src={flowersvg}
                alt=""
                className="absolute top-0 left-0 m-2 size-10"
            />

            <img
                src={flowersvg}
                alt=""
                className="absolute top-0 right-0 m-2 size-10"
            />
            <div className="space-y-2 text-center text-secondary">
                <h4>
                    Tu estas invitado
                </h4>
                <h3 className="text-2xl capitalize text-primary font-raleway">
                    la ceremonia de boda
                </h3>
            </div>

            <div className="bg-neutral rounded-full size-[140px] mx-auto text-slate-200 relative  font-style-script flex flex-col justify-center items-center">
                <p className="mr-16 text-5xl capitalize">{husband}</p>
                <p className="text-2xl">y</p>
                <p className="ml-16 text-5xl capitalize">{wife}</p>
            </div>

            <img
                className="block w-32"
                src={wedding_ilustration}
                alt="wedding ilustration" />


            <img
                src={flowersvg}
                alt=""
                className="absolute bottom-0 left-0 m-2 size-10"
            />

            <img
                src={flowersvg}
                alt=""
                className="absolute bottom-0 right-0 m-2 size-10"
            />
        </article>
    )
}
