import SectionLink from '../../shared/sectionlink.component';

const createLink = ({ links }) =>
    Object.values(links).map((link, index) => {
        const id = `link_${index}`;
        const path = `/${link.toLowerCase()}`;
        return (
            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <SectionLink key={id} path={path} link={link} />
            </div>
        )
    });

export const NavbarDesktop = (props) => (
    <ul>
        {createLink(props)}
    </ul>
);