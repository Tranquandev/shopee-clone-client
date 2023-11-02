export default function Footer() {
  return (
    <footer className='bg-footer-bg py-16'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-4 px-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div className='text-text-tt-ft'>
              © 2022 lorem. Tất cả các quyền được bảo lưu.
            </div>
          </div>
          <div className='lg:col-span-2'>
            <div className='text-text-tt-ft'>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia
              Việt Nam Philippines Brazil México Colombia Chile Poland
            </div>
          </div>
        </div>
        <div className='mt-10 px-4 text-center text-sm'>
          <div className='text-text-tt-ft'>Công ty TNHH Shopee</div>
          <div className='mt-6 text-text-tt-ft'>
            Địa chỉ: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15000.
          </div>
          <div className='mt-2 text-text-tt-ft'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Trần Minh Quân - Điện thoại liên
            hệ: 0798038589
          </div>
          <div className='mt-2 text-text-tt-ft'>
            Mã số doanh nghiệp: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div className='mt-2 text-text-tt-ft'>
            © 2015 - Bản quyền thuộc về MinhQuan
          </div>
        </div>
      </div>
    </footer>
  )
}
