import { LeafIcon } from "../../ui/Dashboard/components/IconTable"
export const HeaderStudio = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between p-3">
                <a href="#" className="d-flex align-items-center text-success">
                    <LeafIcon />
                    <span >Studio</span>
                </a>
            </div>
        </>
    )
}

export default HeaderStudio
