import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext
} from "@/components/ui/pagination";

interface PaginationControlsProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}

export default function PaginationControls({ page, setPage, totalPages }: PaginationControlsProps) {
    return (
        <Pagination className="mt-5">
            <PaginationContent>
                {/* Previous */}
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => setPage((p) => Math.max(p - 1, 0))}
                        className={page === 0 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                        <PaginationLink
                            isActive={page === i}
                            onClick={() => setPage(i)}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {/* Next */}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                        className={page === totalPages - 1 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
