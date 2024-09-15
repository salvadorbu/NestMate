import { findMatches } from '@/actions/user.actions';
import { getUser as getPropelUser } from '@propelauth/nextjs/server/app-router';
import { getPropertyById } from '@/actions/property.actions';
import Image from 'next/image';
import { User, Background } from '@/once-ui/components';
import ProfilePicture from '../../../assets/default.jpg';
import Navbar from '@/components/shared/Navbar';

interface PageProps {
    params: {
        id: string;
    };
}

export default async function PropertyPage({ params }: PageProps) {
    const { id } = params;

    const user = await getPropelUser();
    const userId = user?.userId ?? '';
    const loggedIn = user != null;
    let onboarded = true;
    const email = user?.email ?? '';

    const property = await getPropertyById({ propertyId: id });
    const matchedUsers = await findMatches({ userId }); // list of [email, name]

    return (
        <>
            <Navbar
                loggedIn={loggedIn}
                email={email}
                userId={userId}
                onboarded={onboarded}
            />
            <Background dots={false} />
            <div className="property-page-container">
                <div className="property-page-container__container">
                    <div className="property-page-container__property-info">
                        <h2>Property Details</h2>
                        <Image
                            src={property.Img_Link}
                            alt="Property Image"
                            width={600} // Increased width
                            height={400} // Increased height
                            className="property-page-container__property-info__image"
                        />
                        <p>
                            <strong>Address:</strong> {property.Address}
                        </p>
                        <p>
                            <strong>Rent:</strong> ${property.Rent}/month
                        </p>
                        <p>
                            <strong>Rooms:</strong> {property.Bed}
                        </p>
                        <p>
                            <strong>Bathrooms:</strong> {property.Bath}
                        </p>
                        <p>
                            <strong>Pets Allowed:</strong>{' '}
                            {property.Pets === 'TRUE' ? 'Yes' : 'No'}
                        </p>
                    </div>

                    <div className="property-page-container__matched-users">
                        <h2>Positive Matches</h2>
                        {matchedUsers.length > 0 ? (
                            matchedUsers.map(([email, name], index) => (
                                <User
                                    key={index}
                                    name={name}
                                    subline={email}
                                    tagProps={{
                                        label: '',
                                        variant: 'neutral',
                                    }}
                                    avatarProps={{
                                        empty: false,
                                        src: ProfilePicture.src,
                                    }}
                                />
                            ))
                        ) : (
                            <p>No matches found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
