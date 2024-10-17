import React from "react";
import CIRCLE from "@/assets/img/utils/circle.png";

const CTA: React.FC = () => {
  return (
    <section className="my-120 position-relative overflow-hidden">
      <div className="position-relative container">
        <div className="py-120 position-relative bg-green overflow-hidden">
          <img
            className="position-absolute top-0 start-50 translate-middle-x h-100 opacity-50"
            src={CIRCLE.src}
            alt=""
          />
          <div className="text-center position-relative">
            <h3 className="display-5 fw-bold text-white mb-6">
              <span>Fale agora com um especialista</span>
            </h3>
            <a className="btn bg-golden p-3 rounded-pill text-white" href="#">
              <span>Saiba Mais</span>
             
                <path
                  d="M14.8299 11.29L10.5899 7.05001C10.497 6.95628 10.3864 6.88189 10.2645 6.83112C10.1427 6.78035 10.012 6.75421 9.87994 6.75421C9.74793 6.75421 9.61723 6.78035 9.49537 6.83112C9.37351 6.88189 9.26291 6.95628 9.16994 7.05001C8.98369 7.23737 8.87915 7.49082 8.87915 7.75501C8.87915 8.0192 8.98369 8.27265 9.16994 8.46001L12.7099 12L9.16994 15.54C8.98369 15.7274 8.87915 15.9808 8.87915 16.245C8.87915 16.5092 8.98369 16.7626 9.16994 16.95C9.26338 17.0427 9.3742 17.116 9.49604 17.1658C9.61787 17.2155 9.74834 17.2408 9.87994 17.24C10.0115 17.2408 10.142 17.2155 10.2638 17.1658C10.3857 17.116 10.4965 17.0427 10.5899 16.95L14.8299 12.71C14.9237 12.617 14.9981 12.5064 15.0488 12.3846C15.0996 12.2627 15.1257 12.132 15.1257 12C15.1257 11.868 15.0996 11.7373 15.0488 11.6154C14.9981 11.4936 14.9237 11.383 14.8299 11.29Z"
                  fill="#FF460C"
                ></path>
           
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
