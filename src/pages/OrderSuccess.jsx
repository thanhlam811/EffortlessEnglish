import React from 'react';
import { CheckCircle, Copy, ChevronLeft, Download, FileText, ExternalLink } from 'lucide-react';

const OrderSuccess = () => {
  const [copied, setCopied] = React.useState(false);
  const searchParams = new URLSearchParams(window.location.search);

  const productDetails = JSON.parse(localStorage.getItem("item"))

  const orderDetails = {
    code: searchParams.get('code'),
    id: searchParams.get('id'),
    status: searchParams.get('status'),
    orderCode: searchParams.get('orderCode'),
    cancel: searchParams.get('cancel') === 'true'
  };

  let productImage;
  let productFile;

  if (productDetails.productName === "Khóa Học Start"){
    productImage = "https://res.cloudinary.com/dlc1n2y1f/image/upload/v1731764884/effortless-english-oec-800x800_pl5p7z.jpg"
    productFile = "https://res.cloudinary.com/dlc1n2y1f/image/upload/fl_attachment:v1731764884/effortless-english-oec-800x800_pl5p7z.jpg"
  }
  else if (productDetails.productName === "Khóa Học Advanced"){
    productImage = "https://res.cloudinary.com/dlc1n2y1f/image/upload/v1731764885/effortless-english-rec-800x800_ixojqm.jpg"
    productFile = "https://res.cloudinary.com/dlc1n2y1f/image/upload/fl_attachment:v1731764885/effortless-english-rec-800x800_ixojqm.jpg"
  }
  else {
    productImage = "https://res.cloudinary.com/dlc1n2y1f/image/upload/v1731764885/effortless-english-pec-800x800_madluv.jpg"
    productFile = "https://res.cloudinary.com/dlc1n2y1f/image/upload/fl_attachment:v1731764885/effortless-english-pec-800x800_madluv.jpg"
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8 mt-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Success Card */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-white/20">
            <div className="flex flex-col items-center relative">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg animate-bounce-small">
                <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-white" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-2 text-center">
                Đặt hàng thành công!
              </h1>
              
              <p className="text-sm md:text-base text-gray-600 text-center mb-8 max-w-sm">
                Cảm ơn bạn đã đặt hàng. Bạn có thể tải về sản phẩm ngay bây giờ.
              </p>

              <div className="w-full space-y-4">
                <div className="group bg-white/80 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-col justify-between items-center flex-wrap gap-2">
                    <span className="text-sm md:text-base text-gray-600 font-bold">Mã đơn hàng:</span>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm md:text-base font-medium break-all">
                        {orderDetails.orderCode}
                      </span>
                      <button 
                        onClick={() => copyToClipboard(orderDetails.orderCode)}
                        className="text-blue-500 hover:text-blue-600 hover:scale-110 transition-transform duration-200 flex-shrink-0"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-col justify-between items-center flex-wrap gap-2">
                    <span className="text-sm md:text-base text-gray-600 font-bold">Mã giao dịch:</span>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm md:text-base font-medium break-all">
                        {orderDetails.id}
                      </span>
                      <button 
                        onClick={() => copyToClipboard(orderDetails.id)}
                        className="text-blue-500 hover:text-blue-600 hover:scale-110 transition-transform duration-200 flex-shrink-0"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600 font-bold">Trạng thái:</span>
                    <span className="px-4 py-1.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium shadow-sm">
                      {orderDetails.status}
                    </span>
                  </div>
                </div>
              </div>

              {copied && (
                <div className="mt-4 text-sm text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full animate-fade-in">
                  ✨ Đã sao chép vào clipboard!
                </div>
              )}
            </div>
          </div>

          {/* Product Details Card */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-white/20">
            <div className="relative">
              
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Thông tin sản phẩm
              </h2>

              <div className="space-y-6">
                {/* Product Image & Basic Info */}
                <div className="bg-white/80 rounded-xl border border-gray-100 overflow-hidden">
                  <img 
                    src={productImage} 
                    alt={productDetails.name}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {productDetails.productName}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {productDetails.description + " thành công"}
                    </p>
                    <div className="mt-2 text-lg font-semibold text-blue-600">
                      {productDetails.price +'đ'}
                    </div>
                  </div>
                </div>

                {/* Downloadable Files */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Tập tin tải xuống</h3>

                    <div className="bg-white/80 p-4 rounded-xl border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-500" />
                        <div>
                          <div className="font-bold text-gray-800">{productFile.split("/")[7].split(".")[0]}</div>
                          <div className="text-sm text-gray-500">{productFile.length + "KB"} • {productFile.split(".")[3].toUpperCase()}</div>
                        </div>
                      </div>
                      <a
                        //onClick={() => window.open(productFile, '_blank')}
                        href={productFile} download
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Tải xuống</span>
                      </a>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 max-w-md mx-auto">
          <button 
            onClick={() => {
              localStorage.removeItem("item")
              window.location.href = '/'
            }}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Quay lại trang chủ
          </button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default OrderSuccess;

// Add these custom animations to your global CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-small {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-bounce-small {
    animation: bounce-small 3s infinite;
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`;
document.head.appendChild(style);