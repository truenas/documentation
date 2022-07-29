---
---

Select the compression algorithm that best suits your needs from the **Compression** dropdown list of options.

[LZ4](https://manpages.debian.org/unstable/lz4/lz4.1.en.html) maximizes performance and dynamically identifies the best files to compress. LZ4 provides lightning-fast compression/decompression speeds and comes coupled with a high-speed decoder. This makes it one of the best Linux compression tools for enterprise customers.

[ZSTD](https://manpages.debian.org/unstable/zstd/zstd.1.en.html) offers highly configurable compression speeds, with a very fast decoder.

[Gzip](https://manpages.debian.org/unstable/gzip/gzip.1.en.html) is a standard UNIX compression tool widely used for Linux. It is compatible with every GNU software which makes it a good tool for remote engineers and seasoned Linux users. It offers the maximum compression with the greatest performance impact. The higher the compression level implemented the greater the impact on CPU usage levels. Use with caution especially at higher levels.

ZLE or Zero Length Encoding, leaves normal data alone but only compresses continuous runs of zeros. 

LZJB compresses crash dumps and data in ZFS. LZJB is optimized for performance while providing decent compression. LZ4 compresses roughly 50% faster than LZJB when operating on compressible data, and is greater than three times faster for uncompressible data. LZJB was the original algorithm used by ZFS but it is now deprecated.