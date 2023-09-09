import Title from '../../../components/Title/title';
import data from '../../../../db';
import Membership from './membership';
import { Button } from '../../../components/button/button';

const Memberships = () => {
  return (
    <>
      <div className="container relative py-[140px]">
        <div className="absolute -right-20 md:-right-10 lg:right-16  -top-8">
          <svg
            width="292"
            height="292"
            viewBox="0 0 292 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M216.063 148.116C210.467 149.657 205.762 151.08 200.996 152.23C192.923 154.213 184.861 155.812 176.44 154.267C167.898 152.691 162.13 147.823 160.016 139.587C158.726 134.528 158.812 129.132 158.473 123.886C158.351 121.834 158.806 119.714 159.073 116.643C155.703 119.74 153.094 122.213 150.385 124.575C143.789 130.376 137.424 136.45 130.477 141.773C120.994 149.116 111.794 147.587 104.746 137.792C101.985 133.949 100.137 129.393 97.9133 125.128C97.2523 123.841 96.7838 122.475 96.1141 120.885C92.2897 128.295 88.7599 135.393 84.9783 142.298C76.1411 158.405 62.4873 154.279 54.6014 144.227C52.4918 141.539 51.0013 138.278 49.5204 135.148C48.6006 133.022 48.9048 130.648 51.2641 129.659C53.3906 128.739 55.0008 130.182 56.1644 132.026C57.3383 133.831 58.4006 135.736 59.7471 137.369C61.3248 139.276 62.9428 141.194 64.8657 142.759C70.282 147.15 74.7708 146.747 78.8801 141.087C81.789 137.098 84.124 132.663 86.4788 128.318C88.6705 124.276 90.6809 120.102 92.6913 115.927C93.7523 113.79 94.8941 111.673 97.5526 111.534C100.605 111.366 101.797 113.777 102.908 115.995C104.34 118.812 105.336 121.818 106.92 124.544C108.875 128.009 110.92 131.454 113.361 134.528C116.687 138.687 119.716 139.287 124.286 136.54C128.654 133.912 132.973 130.972 136.869 127.665C145.179 120.539 153.207 113.169 161.246 105.759C163.154 104.009 165.019 102.937 167.439 104.07C169.748 105.132 170.01 107.306 169.767 109.609C169.324 113.71 168.698 117.85 168.466 121.962C168.278 125.569 168.149 129.277 168.617 132.837C169.846 142.352 174.476 146.456 184.002 147.208C191.164 147.788 198.212 146.962 205.142 145.246C210.14 144.026 215.049 142.483 219.967 141.071C222.567 140.315 225.259 139.539 227.258 142.156C229.116 144.651 228.033 147.213 226.849 149.663C226.329 150.691 225.657 151.638 225.026 152.595C223.724 154.499 222.522 156.514 221.038 158.286C210.092 171.534 211.898 185.195 219.797 198.905C221.26 201.429 223.524 203.511 225.495 205.733C226.46 206.839 227.79 207.694 228.603 208.891C229.205 209.732 229.723 211.24 229.326 211.956C228.908 212.753 227.41 213.231 226.459 213.418C224.386 213.792 221.944 212.912 220.353 211.732C217.211 209.383 214.101 206.741 211.801 203.618C206.68 196.722 203.948 188.715 202.634 180.21C201.516 172.959 203.578 166.39 207.396 160.354C209.94 156.445 212.767 152.78 216.063 148.116Z"
              fill="black"
            />
          </svg>
        </div>
        <Title
          text="Membership benefits"
          subtitle="Become our sponsor and get all benefits"
        />
        <div className="mt-24 grid grid-cols-1 grid-rows-1 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-5 ">
          {data.memberships.map((membership) => (
            <Membership key={membership.id} membership={membership} />
          ))}
        </div>
        <a href="#sponsors" className="w-full inline-block text-center mt-24">
          <Button
            text="SEE PRICING"
            classes="px-[36px] py-[20px] bg-black text-white hover:bg-transparent hover:text-black"
          />
        </a>
      </div>
    </>
  );
};

export default Memberships;
