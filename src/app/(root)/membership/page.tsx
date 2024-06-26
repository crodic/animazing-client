import Container from '@/components/Container';
import { tiers } from '@/mocks/tiers-pricing';
import MembershipList from '@/views/client/membershipPage/MembershipList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Animazing Artwork | Memberships',
    description: 'The website by Crodic Crystal',
};

export default function MembershipPage() {
    return (
        <Container disablePadding>
            <div className="relative overflow-hidden drop-shadow-md">
                <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-base font-semibold leading-7">Membership Animazing</h2>
                        <p className="font-geist mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                            Nâng cấp tài khoản Animazing của bạn, ngay bây giờ
                        </p>
                    </div>
                    <div className="relative mt-6">
                        <p className="mx-auto max-w-2xl text-lg leading-8">
                            Nhận các ưu đãi đặc quyền theo từng gói nâng cấp. Gói nâng cấp có thời hạn là vĩnh viễn cho
                            1 tài khoản . Người dùng có thể lựa chọn gói cao nhất để tiết kiệm chi phí
                        </p>
                    </div>
                </div>
                <MembershipList tiers={tiers} />
            </div>
        </Container>
    );
}
